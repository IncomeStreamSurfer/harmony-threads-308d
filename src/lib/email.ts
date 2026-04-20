const RESEND_API = "https://api.resend.com/emails";
const FROM = "Harmony Threads <onboarding@resend.dev>";

type SendArgs = { to: string; subject: string; html: string; from?: string };

export async function sendEmail({ to, subject, html, from }: SendArgs): Promise<{ ok: boolean; error?: string }>{
  const key = import.meta.env.RESEND_API_KEY ?? "";
  if (!key) return { ok: false, error: "RESEND_API_KEY not set" };
  try {
    const r = await fetch(RESEND_API, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: from || FROM, to, subject, html }),
    });
    if (!r.ok) return { ok: false, error: `Resend ${r.status}: ${await r.text()}` };
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: (e as Error).message };
  }
}

export function orderConfirmationHtml(o: {
  name?: string | null;
  email: string;
  order_id: string;
  amount_total: number;
  currency: string;
  items: { description: string; quantity: number; amount_total: number }[];
}) {
  const lines = o.items
    .map(
      (i) =>
        `<tr><td style="padding:8px 0;border-bottom:1px solid #eee">${escape(i.description)} \u00d7 ${i.quantity}</td><td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right">${fmt(i.amount_total, o.currency)}</td></tr>`
    )
    .join("");
  return `
<!doctype html>
<html>
  <body style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;background:#f7f3ec;color:#0a0a0a;margin:0;padding:40px">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e0d5">
      <div style="padding:32px;background:#0a0a0a;color:#f7f3ec">
        <p style="letter-spacing:0.2em;text-transform:uppercase;font-size:11px;color:#d97706;margin:0">Order confirmed</p>
        <h1 style="font-family:Georgia,serif;font-size:28px;margin:8px 0 0">Harmony Threads</h1>
      </div>
      <div style="padding:32px">
        <p>Hi${o.name ? " " + escape(o.name) : ""} \u2014 thanks for the order. Your copy of the music is on its way.</p>
        <p style="color:#666;font-size:14px">Order <strong>${escape(o.order_id)}</strong></p>
        <table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:14px">
          ${lines}
          <tr><td style="padding:12px 0;font-weight:600">Total</td><td style="padding:12px 0;font-weight:600;text-align:right">${fmt(o.amount_total, o.currency)}</td></tr>
        </table>
        <p style="color:#555;font-size:13px">Physical items ship within 2-3 working days from Manchester. Digital downloads are already waiting in your inbox next to this message.</p>
      </div>
      <div style="padding:20px 32px;background:#f7f3ec;color:#666;font-size:12px;text-align:center">
        Harmony Threads \u00b7 Wear the music. Live the legacy.
      </div>
    </div>
  </body>
</html>`;
}

function escape(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c] as string));
}

function fmt(pence: number, currency: string): string {
  const sym = currency?.toUpperCase() === "GBP" ? "\u00a3" : currency?.toUpperCase() === "EUR" ? "\u20ac" : "$";
  return sym + (pence / 100).toFixed(2);
}
