const mysql = require('mysql');
const { createConnection } = require('net');
const { exit } = require('process');
const { json } = require('stream/consumers');

module.exports = {
    connection: mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "PawsWeek",
        database: "rspcahhb",
        insecureAuth : true
    }),

    checkDatabase: (dayNum) => {


        connection.query(`SELECT volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersrole, volunteersavailability, volunteerstime FROM volunteers WHERE volunteersavailability = "{$dayNum}"`, (err, rows, fields) => {
            if (err) {
                throw err; return 1
            }
        
            // console.log('The solution is: ', rows[0].solution)
        })
        
        connection.end()
        return 0
    }
}