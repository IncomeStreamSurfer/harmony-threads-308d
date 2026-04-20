import type { APIRoute } from "astro";
import { stripe, buildLineItems } from "../../lib/stripe";
import { productBySlug } from "../../data/products";

export const prerender = false;

type CartItem = {
  handle: string;
  title: string;
  image?: string;
  size?: string | null;
  color?: string | null;
  price_pence: number;
  quantity: number;
  requires_shipping?: boolean;
};

function getOrigin(request: Request): string {
  const envOrigin = import.meta.env.PUBLIC_SITE_URL;
  if (envOrigin) return String(envOrigin).replace(/\/$/, "");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export const POST: APIRoute = async ({ request }) => {
  let body: { items: CartItem[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), { status: 400 });
  }
  const items = Array.isArray(body?.items) ? body.items : [];
  if (!items.length) {
    return new Response(JSON.stringify({ error: "cart is empty" }), { status: 400 });
  }

  const lineItems = [];
  let anyShipping = false;
  for (const it of items) {
    const product = productBySlug(it.handle);
    if (!product) continue;
    const variant =
      product.variants.find(
        (v) =>
          (!it.size || v.option1_value.toLowerCase() === String(it.size).toLowerCase()) &&
          (!it.color || v.option2_value.toLowerCase() === String(it.color).toLowerCase())
      ) || product.variants[0];
    const unit_amount = variant.price_pence;
    const desc = [product.vendor, variant.option1_value, variant.option2_value].filter(Boolean).join(" \u00b7 ");
    if (product.requires_shipping) anyShipping = true;
    lineItems.push({
      name: product.title,
      description: desc || undefined,
      image_url: variant.image_url || product.image_url,
      sku: variant.sku,
      unit_amount,
      quantity: Math.max(1, Math.min(10, Number(it.quantity) || 1)),
    });
  }

  if (!lineItems.length) {
    return new Response(JSON.stringify({ error: "no matching products" }), { status: 400 });
  }

  const origin = getOrigin(request);
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: buildLineItems(lineItems),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      shipping_address_collection: anyShipping ? { allowed_countries: ["GB","US","CA","IE","FR","DE","NL","BE","AU","NZ","ES","IT","SE","NO","DK","FI"] } : undefined,
      shipping_options: anyShipping
        ? [
            { shipping_rate_data: { type: "fixed_amount", display_name: "Standard (2-3 days)", fixed_amount: { amount: 550, currency: "gbp" }, delivery_estimate: { minimum: { unit: "business_day", value: 2 }, maximum: { unit: "business_day", value: 5 } } } },
            { shipping_rate_data: { type: "fixed_amount", display_name: "Express (1-2 days)",  fixed_amount: { amount: 1200, currency: "gbp" }, delivery_estimate: { minimum: { unit: "business_day", value: 1 }, maximum: { unit: "business_day", value: 2 } } } },
          ]
        : undefined,
      metadata: { source: "harmony-threads-web" },
    });
    return new Response(JSON.stringify({ url: session.url, id: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: unknown) {
    return new Response(JSON.stringify({ error: (e as Error).message || "stripe failure" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
