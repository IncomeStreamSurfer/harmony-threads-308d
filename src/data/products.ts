// Auto-generated from data/product_template.csv — values are byte-for-byte from the CSV.
// If you want to change product copy, vendor, SKU or prices, edit the CSV and re-export.

export type Variant = {
  sku: string;
  option1_name: string;
  option1_value: string;
  option2_name: string;
  option2_value: string;
  price_pence: number;
  compare_at_pence: number | null;
  inventory: number;
  weight_g: number;
  requires_shipping: boolean;
  image_url: string;
  alt_text: string;
};

export type Product = {
  handle: string;
  title: string;
  description: string;
  vendor: string;
  product_category: string;
  type: string;
  tags: string[];
  image_url: string;
  alt_text: string;
  seo_title: string;
  seo_description: string;
  option1_name: string;
  option2_name: string;
  color_metafield: string;
  google_category: string;
  google_gender: string;
  google_age_group: string;
  google_condition: string;
  variants: Variant[];
  price_pence: number;
  compare_at_pence: number | null;
  total_inventory: number;
  requires_shipping: boolean;
};

export const products: Product[] = [
  {
    handle: "physical-product-the-band-t-shirt",
    title: "Physical Product \u201cThe Band\u201d T-Shirt",
    description: "Celebrate the timeless legacy of one of rock music's most influential groups with our exclusive The Band Graphic T-Shirt. Perfect for music lovers and vintage style enthusiasts, this t-shirt features a striking graphic of The Band, capturing the essence of their iconic sound and enduring spirit.",
    vendor: "Harmony Threads",
    product_category: "Apparel & Accessories > Clothing > Clothing Tops > T-Shirts",
    type: "Graphic shirt",
    tags: ["Unisex","Clothing","Men","Women","Casual","Vintage"],
    image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000",
    alt_text: "Green t-shirt with The Band graphic",
    seo_title: "Vintage The Band Graphic T-Shirt: Iconic Rock Music Tribute Tee",
    seo_description: "Celebrate the legacy of rock icons with our exclusive The Band Graphic T-Shirt. Perfect for music lovers and vintage style fans, this tee features a striking graphic of The Band, capturing their iconic sound and spirit.",
    option1_name: "Size",
    option2_name: "Color",
    color_metafield: "green; gray; red",
    google_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    google_gender: "Unisex",
    google_age_group: "Adult (13+ years old)",
    google_condition: "New",
    variants: [
      { sku: "TheBandTShirt-SG", option1_name: "Size", option1_value: "Small",  option2_name: "Color", option2_value: "green", price_pence: 1999, compare_at_pence: 2499, inventory: 47, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Green t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-SA", option1_name: "Size", option1_value: "Small",  option2_name: "Color", option2_value: "gray",  price_pence: 1999, compare_at_pence: 2499, inventory: 42, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Gray t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-SR", option1_name: "Size", option1_value: "Small",  option2_name: "Color", option2_value: "red",   price_pence: 1999, compare_at_pence: 2499, inventory: 51, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Red t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-MG", option1_name: "Size", option1_value: "Medium", option2_name: "Color", option2_value: "green", price_pence: 1999, compare_at_pence: 2499, inventory: 40, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Green t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-MA", option1_name: "Size", option1_value: "Medium", option2_name: "Color", option2_value: "gray",  price_pence: 1999, compare_at_pence: 2499, inventory: 39, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Gray t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-MR", option1_name: "Size", option1_value: "Medium", option2_name: "Color", option2_value: "red",   price_pence: 1999, compare_at_pence: 2499, inventory: 56, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Red t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-LG", option1_name: "Size", option1_value: "Large",  option2_name: "Color", option2_value: "green", price_pence: 1999, compare_at_pence: 2499, inventory: 50, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Green t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-LA", option1_name: "Size", option1_value: "Large",  option2_name: "Color", option2_value: "gray",  price_pence: 1999, compare_at_pence: 2499, inventory: 44, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Gray t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-LR", option1_name: "Size", option1_value: "Large",  option2_name: "Color", option2_value: "red",   price_pence: 1999, compare_at_pence: 2499, inventory: 34, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Red t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-XG", option1_name: "Size", option1_value: "XL",     option2_name: "Color", option2_value: "green", price_pence: 1999, compare_at_pence: 2499, inventory: 27, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Green t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-XA", option1_name: "Size", option1_value: "XL",     option2_name: "Color", option2_value: "gray",  price_pence: 1999, compare_at_pence: 2499, inventory: 43, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Gray t-shirt with The Band graphic" },
      { sku: "TheBandTShirt-XR", option1_name: "Size", option1_value: "XL",     option2_name: "Color", option2_value: "red",   price_pence: 1999, compare_at_pence: 2499, inventory: 40, weight_g: 150, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/forest-hiker.jpg?width=1000", alt_text: "Red t-shirt with The Band graphic" },
    ],
    price_pence: 1999,
    compare_at_pence: 2499,
    total_inventory: 513,
    requires_shipping: true,
  },
  {
    handle: "digital-product-the-history-of-rock-music",
    title: "Digital Product The History of Rock Music",
    description: "Dive into the rich and electrifying world of rock music with 'The History of Rock Music: From Roots to Revolution.' This comprehensive e-book traces the evolution of rock from its origins in blues, jazz, and gospel to its emergence as a powerful cultural force that shaped generations.",
    vendor: "Harmony Publishing",
    product_category: "Media > Books",
    type: "eBook",
    tags: ["eBook","Music","History","Rock"],
    image_url: "https://burst.shopifycdn.com/photos/vinyl-records.jpg?width=1000",
    alt_text: "The History of Rock Music \u2014 digital eBook cover",
    seo_title: "The History of Rock Music \u2014 Digital eBook (PDF, Audio, Kindle)",
    seo_description: "The definitive eBook on the history of rock music, from blues roots to modern revolution. Available as PDF, Audiobook, and Kindle download.",
    option1_name: "Format",
    option2_name: "",
    color_metafield: "",
    google_category: "Media > Books",
    google_gender: "",
    google_age_group: "",
    google_condition: "New",
    variants: [
      { sku: "HRM-EBK-PDF", option1_name: "Format", option1_value: "PDF",    option2_name: "", option2_value: "", price_pence: 1499, compare_at_pence: null, inventory: 0, weight_g: 0, requires_shipping: false, image_url: "https://burst.shopifycdn.com/photos/vinyl-records.jpg?width=1000", alt_text: "The History of Rock Music PDF cover" },
      { sku: "HRM-EBK-AUD", option1_name: "Format", option1_value: "Audio",  option2_name: "", option2_value: "", price_pence: 2199, compare_at_pence: null, inventory: 0, weight_g: 0, requires_shipping: false, image_url: "https://burst.shopifycdn.com/photos/vinyl-records.jpg?width=1000", alt_text: "The History of Rock Music audiobook cover" },
      { sku: "HRM-EBK-KND", option1_name: "Format", option1_value: "Kindle", option2_name: "", option2_value: "", price_pence:  999, compare_at_pence: null, inventory: 0, weight_g: 0, requires_shipping: false, image_url: "https://burst.shopifycdn.com/photos/vinyl-records.jpg?width=1000", alt_text: "The History of Rock Music Kindle cover" },
    ],
    price_pence: 999,
    compare_at_pence: null,
    total_inventory: 0,
    requires_shipping: false,
  },
  {
    handle: "example-perfume",
    title: "Example Perfume",
    description: "A signature fragrance crafted in small batches. Notes of warm amber, smoked cedar, and vintage leather \u2014 built for long nights, late sets, and the slow burn of a favourite record.",
    vendor: "Acme",
    product_category: "Health & Beauty > Personal Care > Cosmetics > Fragrance",
    type: "Fragrance",
    tags: ["Fragrance","Unisex","Premium"],
    image_url: "https://burst.shopifycdn.com/photos/black-glass-perfume-bottle-and-spritzer.jpg?width=1000",
    alt_text: "Black glass perfume bottle and spritzer",
    seo_title: "Example Perfume \u2014 Signature Amber & Cedar Fragrance",
    seo_description: "A signature small-batch fragrance with warm amber, smoked cedar and vintage leather notes. Premium 50ml bottle.",
    option1_name: "Tier",
    option2_name: "",
    color_metafield: "",
    google_category: "Health & Beauty > Personal Care > Cosmetics > Fragrance",
    google_gender: "Unisex",
    google_age_group: "Adult",
    google_condition: "New",
    variants: [
      { sku: "EX-PERF-MEN", option1_name: "Tier", option1_value: "Premium", option2_name: "", option2_value: "", price_pence: 7499, compare_at_pence: null, inventory: 0, weight_g: 220, requires_shipping: true, image_url: "https://burst.shopifycdn.com/photos/black-glass-perfume-bottle-and-spritzer.jpg?width=1000", alt_text: "Black glass perfume bottle and spritzer" },
    ],
    price_pence: 7499,
    compare_at_pence: null,
    total_inventory: 0,
    requires_shipping: true,
  },
];

export const collections = [
  { slug: "apparel",   title: "Apparel",   description: "Rock-inspired graphic tees and wearables.",        tags: ["Clothing"] },
  { slug: "digital",   title: "Digital",   description: "eBooks, audiobooks and downloads for music lovers.", tags: ["eBook"] },
  { slug: "fragrance", title: "Fragrance", description: "Small-batch scents built for long nights.",          tags: ["Fragrance"] },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.handle === slug);
}

export function productsByCollection(slug: string): Product[] {
  const c = collections.find((c) => c.slug === slug);
  if (!c) return [];
  return products.filter((p) => p.tags.some((t) => c.tags.includes(t)));
}

export function formatPrice(pence: number): string {
  return "\u00a3" + (pence / 100).toFixed(2);
}
