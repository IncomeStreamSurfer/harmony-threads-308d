import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.PUBLIC_SUPABASE_URL ?? "";
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "";
const serviceRole = import.meta.env.SUPABASE_SERVICE_ROLE ?? "";

export const supabase = createClient(url, anon, {
  auth: { persistSession: false },
});

export const supabaseAdmin = createClient(url, serviceRole || anon, {
  auth: { persistSession: false },
});

export type DbProduct = {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  vendor: string | null;
  type: string | null;
  description: string | null;
  long_description: string[] | null;
  highlights: string[] | null;
  price_pence: number;
  compare_at_pence: number | null;
  currency: string;
  image_url: string | null;
  image_alt: string | null;
  gallery: unknown;
  collections: string[] | null;
  tags: string[] | null;
  seo_title: string | null;
  seo_description: string | null;
  weight_g: number | null;
  shipping_note: string | null;
  care: string[] | null;
};

export type DbVariant = {
  sku: string;
  product_id: string;
  size: string | null;
  color: string | null;
  inventory: number;
  barcode: string | null;
};

export type DbContent = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string | null;
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  cover_image_url: string | null;
  tags: string[] | null;
};
