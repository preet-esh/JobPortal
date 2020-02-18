var nodemailer = require('nodemailer');

module.exports = function mailerFun(data) {

      var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'corporate19.pritesh@gmail.com',
         pass: 'preetesh1234'
      }
      });

      var mailOptions = {
      from: 'corporate19.pritesh@gmail.com',
      to: data.email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
      };

      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
         console.log(error);
      } else {
         console.log('Email sent: ' + info.response);
      }
      });
     return{msg:"completed"};
};