import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload;
    const name = data.name?.trim();
    const email = data.email?.trim();
    const company = data.company?.trim() ?? "";
    const phone = data.phone?.trim() ?? "";

    if (!name || !email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company,
      phone,
      source: "mabi-landing",
      submittedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        throw new Error(`Webhook failed with status ${webhookResponse.status}`);
      }
    } else {
      console.log("Contact form submission:", payload);
      console.log(`Notify ${siteConfig.contactEmail} manually or set CONTACT_WEBHOOK_URL`);
    }

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending message" },
      { status: 500 }
    );
  }
}
