import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Contact form submission:", data);

    // In a real app, you would:
    // 1. Send email (e.g. Resend, SendGrid)
    // 2. Save to database
    // 3. Send to CRM
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending message" },
      { status: 500 }
    );
  }
}
