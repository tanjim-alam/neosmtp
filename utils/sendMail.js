const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    auth: {
        user: process.env.USER_ID,
        pass: process.env.PASSWORD,
    },
});


async function sendMail(subject, text, to, form) {
    await transporter.sendMail({
        form: form || process.env.FORM,
        to: to || process.env.TO,
        subject,
        text
    })
}

module.exports = sendMail;