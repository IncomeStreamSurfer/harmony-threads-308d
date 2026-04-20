import type { APIRoute } from "astro";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";
import { supabaseAdmin } from "../../../lib/supabase";
import { sendEmail, orderConfirmationHtml } from "../../../lib/email";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const sig = request.headers.get("stripe-signature");
  const secret = import.meta.env.STRIPE_WEBHOOK_SECRET;
  const raw = await request.text();

  let event: Stripe.Event;
  try {
    if (secret && sig) {
      event = stripe.webhooks.constructEvent(raw, sig, secret);
    } else {
      event = JSON.parse(raw);
    }
  } catch (e: unknown) {
    return new Response(`Bad signature: ${(e as Error).message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    let line_items: Stripe.LineItem[] = [];
    try {
      const li = await stripe.checkout.sessions.listLineItems(session.id, { limit: 25 });
      line_items = li.data;
    } catch (e) {}

    const email = session.customer_details?.email || session.customer_email || "";
    const name = session.customer_details?.name || null;
    const items = line_items.map((i) => ({
      description: i.description,
      quantity: i.quantity || 1,
      amount_total: i.amount_total,
    }));

    try {
      await supabaseAdmin.from("orders").insert({
        stripe_session_id: session.id,
        email,
        amount_total: session.amount_total || 0,
        currency: (session.currency || "gbp").toUpperCase(),
        status: session.payment_status || "paid",
        shipping: session.shipping_details || null,
        items,
      });
    } catch (e) {}

    if (email) {
      await sendEmail({
        to: email,
        subject: "Your Harmony Threads order is confirmed \ud83d\udda4",
        html: orderConfirmationHtml({
          email,
          name,
          order_id: session.id.slice(-10).toUpperCase(),
          amount_total: session.amount_total || 0,
          currency: (session.currency || "gbp").toUpperCase(),
          items: items.map((i) => ({
            description: i.description || "Item",
            quantity: i.quantity || 1,
            amount_total: i.amount_total || 0,
          })),
        }),
      });
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
