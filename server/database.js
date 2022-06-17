const mysql = require('mysql');
const { createConnection } = require('net');
const { exit } = require('process');
const { json } = require('stream/consumers');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rspcahhb",
    insecureAuth : true
})

module.exports = {

    async pushToDatabase(forename, surname, phone, email, address, postcode, role, availability,time, why, skills){
        console.log(forename, surname, phone, email, address, postcode, role, availability,time, why, skills)
        connection.query(`INSERT INTO volunteers (volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersaddress, volunteerspostcode, volunteersrole, volunteersavailability, volunteerstime, volunteerswhy, volunteersskills) VALUES  ("${forename}", "${surname}", ${phone}, "${email}", "${address}", "${postcode}", ${role}, "${availability}","${time}", "${why}", "${skills}");`, (err, rows, fields) => {
            if (err) throw err;    
        })
        
        
        return 0
    },

    
}
 
