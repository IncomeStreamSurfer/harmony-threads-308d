# Harmony Threads

A small-batch ecommerce site for rock music merch, digital eBooks, and fragrance. Built on Astro 5 + Supabase + Stripe + Resend, deployed to Vercel.

## What's in the box

- Home page with hero, marquee, featured products, story, benefits, newsletter
- /shop grid + /collections/apparel, /digital, /fragrance hub pages
- /product/[slug] dynamic detail pages with size/colour selector + variant table
- /cart with localStorage persistence -> Stripe Checkout
- /about, /contact, /faq (with FAQPage schema), /shipping-returns, /privacy, /terms
- /blog index + /blog/[slug] dynamic posts sourced from Supabase `content`
- JSON-LD on every page (Organization, WebSite, Product, Offer, BlogPosting, FAQPage, BreadcrumbList, CollectionPage, ItemList)
- @astrojs/sitemap -> /sitemap-index.xml
- /robots.txt referencing the sitemap

## Data source

Every product / variant / price / SKU is sourced byte-for-byte from `data/product_template.csv`.
