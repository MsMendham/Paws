const mysql = require('mysql');
const { createConnection } = require('net');
const { exit } = require('process');
const { json } = require('stream/consumers');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PawsWeek",
    database: "rspcahhb",
    insecureAuth : true
})

module.exports = {

    async pushToDatabase(forename, surname, phone, email, address, postcode, role, availability,time, why, skills){

         connection.query(`INSERT INTO volunteers (volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersaddress, volunteerspostcode, volunteersrole, volunteersavailability, volunteerstime, volunteerswhy, volunteersskills) VALUES  ("${forename}", "${surname}", ${phone}, "${email}", "${address}", "${postcode}", ${role}, "${availability}","${time}", "${why}", "${skills}");`, (err, rows, fields) => {
            if (err) {    
                return 1
            }
        
            // console.log('The solution is: ', rows[0].solution)
        })
        
        connection.end()
        return 0
    },

    
}
 
