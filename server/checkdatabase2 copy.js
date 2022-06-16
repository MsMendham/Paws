const mysql = require('mysql');
const { createConnection } = require('net');
const { exit } = require('process');
const { json } = require('stream/consumers');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PawsWeek",
    database: "rspcahhb",
    insecureAuth : true
});

module.exports = {
    connection: con,

    checkDatabase: () => {
        dayNum = new Date().getDay() + 1;
        console.log(this.connection)
    }
}