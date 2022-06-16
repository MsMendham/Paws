const emailer = require('./emailer.js')
const database = require('./databasecheck.js')
const { send } = require('process')

module.exports = {
    send: () => {
        console.log('Hy')
        selections = database.checkDatabase(function(result){
            selections = result;
            console.log(selections)
            for (let i = 0; i < result.length; i++) {
                console.log(i + selections[i] + '\n\n')
                emailer.emailSender(selections[i][0] + ' ' + selections[i][1], selections[i][3], selections[i][4], selections[i][5])
            } 
        })        
    },
}
