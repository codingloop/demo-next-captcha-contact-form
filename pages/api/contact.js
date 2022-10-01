import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.FROM_EMAIL_ADDRESS,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL_ADDRESS,
      to: process.env.TO_EMAIL_ADDRESS,
      subject: `Contact form submission from nextjs`,
      html: `<p>You have a contact form submission</p><br>
            <p><strong>Email: </strong></p><br>
            <p><strong>Message: </strong> </p><br>
          `,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to send email, try again" });
  }
  return res.status(200).json({ message: "successfull" });
}
