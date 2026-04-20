import Stripe from "stripe";

const key = import.meta.env.STRIPE_SECRET_KEY ?? "";

export const stripe = new Stripe(key || "sk_test_placeholder", {
  apiVersion: "2024-12-18.acacia" as Stripe.StripeConfig["apiVersion"],
  typescript: true,
});

export type CheckoutLine = {
  name: string;
  description?: string | null;
  unit_amount: number;
  currency?: string;
  quantity: number;
  image_url?: string | null;
  sku?: string | null;
};

export function buildLineItems(items: CheckoutLine[]): Stripe.Checkout.SessionCreateParams.LineItem[] {
  return items.map((it) => ({
    price_data: {
      currency: (it.currency || "gbp").toLowerCase(),
      unit_amount: it.unit_amount,
      product_data: {
        name: it.name,
        description: it.description || undefined,
        images: it.image_url ? [it.image_url] : undefined,
        metadata: it.sku ? { sku: it.sku } : undefined,
      },
    },
    quantity: Math.max(1, it.quantity),
  }));
}
