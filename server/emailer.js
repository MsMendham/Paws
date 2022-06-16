
var nodemailer = require('nodemailer');
const { monitorEventLoopDelay } = require('perf_hooks');


var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'richardrotates@outlook.com',
    pass: 'NeverGonnaGiveYouUp'
  }
});

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

module.exports = {
  emailSender: (name, email, date, time) => {
    content = 'Hey ' + name + 'Don\'t Forget!\nYou signed up to volunteer on ' + days[date] + ' at ' + time + '!\n\nThank you!\n\nRSPCA Halifax Huddersfield Bradford'
    console.log(content)
    var mailOptions = {
      from: 'richardrotates@ymail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: content
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