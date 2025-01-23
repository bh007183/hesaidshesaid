const nodemailer = require("nodemailer");
require('dotenv').config()
const transporter = nodemailer.createTransport({
  service:'gmail',
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(content) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: "From Yourself", // Subject line
    text: "Hello world?", // plain text body
    html: content, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}



module.exports.sendEmail = sendEmail;