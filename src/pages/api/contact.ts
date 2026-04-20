import type { APIRoute } from "astro";
import { supabaseAdmin } from "../../lib/supabase";
import { sendEmail } from "../../lib/email";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { name?: string; email?: string; message?: string } = {};
  const ct = request.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) body = await request.json();
    else {
      const form = await request.formData();
      body = {
        name: (form.get("name") || "").toString(),
        email: (form.get("email") || "").toString(),
        message: (form.get("message") || "").toString(),
      };
    }
  } catch {}
  const { name = "", email = "", message = "" } = body;
  if (!name.trim() || !email.trim() || !message.trim()) {
    return new Response(JSON.stringify({ ok: false, error: "All fields are required." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: "Please enter a valid email." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  try {
    await supabaseAdmin.from("contact_messages").insert({ name, email, message });
  } catch (e) {}

  await sendEmail({
    to: "hello@harmonythreads.shop",
    subject: `New contact: ${name}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  }).catch(() => {});

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
};
