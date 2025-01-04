const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: email, 
    to: "wakisabirhanu@gmail.com", // Fixed recipient email
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <p>Message: ${message}</p>
      <p>From: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `,
  };

  // Create the transporter and send the email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wakisabirhanu@gmail.com", // Your email
      pass: "eudj ifcd xvfk ogzv", // Your email password or app-specific password
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ code: 500, message: "Error sending message" });
    }
    return res.status(200).json({ code: 200, message: "Message sent successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
