const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  console.log("API chaqirildi:", req.method, req.body); // So‘rovni log qilish

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  console.log("So‘rov ma'lumotlari:", { name, email, message }); // Ma'lumotlarni log qilish

  // Transport sozlamalari
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // SMTP ulanishini tekshirish
  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP ulanishida xato:", error);
    } else {
      console.log("SMTP ulanishi muvaffaqiyatli!");
    }
  });

  // Email sozlamalari
  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Yangi xabar: ${name} dan`,
    text: `Ism: ${name}\nEmail: ${email}\nXabar: ${message}`,
    html: `
      <h2>Yangi xabar: ${name} dan</h2>
      <p><strong>Ism:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Xabar:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email yuborildi!");
    return res.status(200).json({ message: 'Email muvaffaqiyatli yuborildi!' });
  } catch (error) {
    console.error('Email yuborishda xato:', error);
    return res.status(500).json({ message: 'Email yuborishda xato yuz berdi.' });
  }
}