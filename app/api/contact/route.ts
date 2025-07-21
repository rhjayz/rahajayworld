// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return NextResponse.json({
      error: false,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Email Error:", err);
    return NextResponse.json(
      { error: true, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
