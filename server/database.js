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

    pushToDatabase: (forename, surname, phone, email, address, postcode, role, availability, why, skills) => {

        connection.query(`INSERT INTO volunteers (volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersaddress, volunteerspostcode, volunteersrole, volunteersavailability, volunteerswhy, volunteersskills) VALUES  ("${forename}", "${surname}", ${phone}, "${email}", "${address}", "${postcode}", ${role}, "${availability}", "${why}", "${skills}");`, (err, rows, fields) => {
            if (err) {throw err; return 1}
        
            // console.log('The solution is: ', rows[0].solution)
        })
        
        connection.end()
        return 0
    }
}
pushToDatabase('Test', 'name', 100000000, 'email', 'Address', 'postcode', 01110, 'Woah', 'helo', 'None2')