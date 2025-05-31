"use server";

import { Resend } from "resend";
import ContactEmail from "../contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = formData;

  try {
    const emailHtml = ContactEmail({ name, email, phone, subject, message });

    await resend.emails.send({
      from: "emailservice@infocare.co",
      to: process.env.CONTACT_EMAIL!,
      subject: `Contact Form: ${subject}`,
      react: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send email" };
  }
}
