import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: "email@email.com",
      to: "ishwarbhat.work@gmail.com",
      subject: `Contact form submission from nextjs`,
      html: `<p>You have a contact form submission</p><br>
            <p><strong>Email: </strong></p><br>
            <p><strong>Message: </strong> </p><br>
          `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
