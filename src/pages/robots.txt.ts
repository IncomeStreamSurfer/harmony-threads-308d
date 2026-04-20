import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || "https://harmony-threads.vercel.app").replace(/\/$/, "");
  const body = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /cart
Disallow: /checkout/

Sitemap: ${base}/sitemap-index.xml
`;
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
