import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, business, phone, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service not configured. Please WhatsApp or call us directly at +91 63776 75005.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const esc = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const safeName = esc(name.trim());
  const safeBusiness = esc(business?.trim() || '—');
  const safePhone = esc(phone?.trim() || '—');
  const safeEmail = esc(email.trim());
  const safeMessage = esc(message.trim());

  try {
    const { error } = await resend.emails.send({
      from: 'NexaWave Website <onboarding@resend.dev>',
      to: 'info.nexawavedigital@gmail.com',
      replyTo: email.trim(),
      subject: `New Lead: ${name.trim()}${business?.trim() ? ` — ${business.trim()}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:32px;border-radius:12px;">
          <div style="background:#16a34a;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;font-size:20px;">New Contact Form Submission</h2>
            <p style="color:#bbf7d0;margin:6px 0 0;font-size:14px;">NexaWave Digital Website</p>
          </div>
          <div style="background:white;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151;width:130px;font-size:13px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151;font-size:13px;">Business</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${safeBusiness}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151;font-size:13px;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151;font-size:13px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">
                  <a href="mailto:${safeEmail}" style="color:#16a34a;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:600;color:#374151;font-size:13px;vertical-align:top;padding-top:14px;">Message</td>
                <td style="padding:10px 0;color:#111827;font-size:14px;line-height:1.6;padding-top:14px;">${safeMessage}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#f0fdf4;border-radius:8px;border-left:4px solid #16a34a;">
              <p style="margin:0;color:#166534;font-size:13px;">
                Hit <strong>Reply</strong> to respond directly to ${safeName} at ${safeEmail}
              </p>
            </div>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">
            NexaWave Digital · Rajsamand, Rajasthan, India
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[contact] Resend API error:', error);
      return NextResponse.json(
        { error: `Email delivery failed: ${error.message}. Please WhatsApp us at +91 63776 75005.` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[contact] Unexpected error:', message);
    return NextResponse.json(
      { error: 'Unexpected error. Please WhatsApp or call us at +91 63776 75005.' },
      { status: 500 }
    );
  }
}
