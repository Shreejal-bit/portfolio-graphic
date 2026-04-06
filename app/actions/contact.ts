"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // Create email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || "lebaotran050603@gmail.com",
      subject: `New Contact Form Message from ${formData.name}`,
      replyTo: formData.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #fff5f8 0%, #ffeef3 100%); border-radius: 20px;">
          <h2 style="color: #ff5d8f; margin-bottom: 20px;">✨ New Message from Portfolio</h2>
          
          <div style="background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(255, 179, 193, 0.2);">
            <p style="margin: 10px 0;"><strong style="color: #ff5d8f;">Name:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #ff5d8f;">Email:</strong> ${formData.email}</p>
            <p style="margin: 10px 0;"><strong style="color: #ff5d8f;">Message:</strong></p>
            <p style="background: #fff5f8; padding: 15px; border-radius: 10px; line-height: 1.6;">${formData.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="color: #8b8b8b; font-size: 12px; margin-top: 20px; text-align: center;">
            Sent from your portfolio contact form 💕
          </p>
        </div>
      `,
      text: `
        New Message from Portfolio Contact Form
        
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
        
        Sent from: ${formData.email}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Your message has been sent successfully! 💕",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
