import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      subject: z.string().optional(),
      message: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not set");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website <noreply@1-bureau.com>",
        to: ["admin@1-bureau.com"],
        reply_to: data.email,
        subject: data.subject ? `[Website] ${data.subject}` : `[Website] New message from ${data.name}`,
        html: `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${data.message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return { ok: true };
  });
