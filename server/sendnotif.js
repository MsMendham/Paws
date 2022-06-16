import emailer from './emailer.js';

module.exports = {
    send: () => {
        emailer.emailSender()
    }
}