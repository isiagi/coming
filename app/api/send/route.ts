import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../email-template";

const resend = new Resend("re_DHeWCFfM_4oG6ZtRMWk2CvUS7DLnVzPfZ");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `isiagigeofrey0@gmail.com`,
      to: [`${email}`],
      subject: subject || "New Contact Form Message",
      react: EmailTemplate({
        firstName: name,
        email,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
