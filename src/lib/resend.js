"use server";

import { Resend } from "resend";

export const sendEmail = async (data) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not defined in environment variables!");
    return { success: false, error: "RESEND_API_KEY is not defined in environment variables." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, service, message } = data;

  try {
    const res = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "umair.dev55@gmail.com",
      subject: `New Contact Request: ${service} from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true, data: res };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message || error };
  }
};
