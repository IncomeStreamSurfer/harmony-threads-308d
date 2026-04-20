import type { APIRoute } from "astro";
import { supabaseAdmin } from "../../lib/supabase";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let email = "";
  const ct = request.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) {
      const b = await request.json();
      email = (b.email || "").toString().trim();
    } else {
      const form = await request.formData();
      email = (form.get("email") || "").toString().trim();
    }
  } catch {}
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonRedirect(request, { ok: false, error: "Please enter a valid email." }, 400);
  }
  try {
    await supabaseAdmin.from("subscribers").upsert({ email, source: "web" }, { onConflict: "email" });
  } catch (e) {
    return jsonRedirect(request, { ok: false, error: "We couldn't save your email right now." }, 500);
  }
  return jsonRedirect(request, { ok: true });
};

function jsonRedirect(request: Request, body: object, status = 200) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("application/json") || (request.headers.get("content-type") || "").includes("application/json")) {
    return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
  }
  return new Response(null, { status: 303, headers: { Location: (body as any).ok ? "/?subscribed=1" : "/?subscribed=0" } });
}
