const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `inShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}


// const nodemailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail');

// //--
// const apiKey = process.env.API_KEY;
// sgMail.setApiKey(apiKey);
// //--
// module.exports =  ({ from, to, subject, text, html}) => {

//     //--
//     const msg = {
//         to,from,subject,text,html
//       }

//   sgMail.send(msg).then(() => {
//     console.log('Email sent')
//   }).catch((error) => {
//     console.error(error)
//   })

   
// }

















