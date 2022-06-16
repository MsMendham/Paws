const emailer = require('./emailer.js')
const database = require('./databasecheck.js')
const { send } = require('process')

module.exports = {
    send: () => {
        console.log('Hy')
        selections = database.checkDatabase()
        for (let i = 0; i < selections.length; i++) {
            console.log(selections[i])
            // emailer.emailSender()
        }
    },
}
