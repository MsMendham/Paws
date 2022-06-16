
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'richardrotates@gmail.com',
    pass: 'NeverGonnaGiveYouUp'
  }
});

module.exports = {
  emailSender: (email, date, time) => {
    var mailOptions = {
      from: 'richardrotates@gmail.com',
      to: '.com',
      subject: 'Sending Email using Node.js',
      text: 'Don\'t Forget!\nYou signed up to volunteer on ' + date + ' at ' + time + '!\n\nThank you!\n\nRSPCA Halifax Huddersfield Bradford'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}