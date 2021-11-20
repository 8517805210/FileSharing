const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');

//--
const apiKey = process.env.API_KEY;
sgMail.setApiKey(apiKey);
//--
module.exports =  ({ from, to, subject, text, html}) => {

    //--
    const msg = {
        to,from,subject,text,html
      }

  sgMail.send(msg).then(() => {
    console.log('Email sent')
  }).catch((error) => {
    console.error(error)
  })

   
}

















