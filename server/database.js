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
    },

    createDatabase: () => {
        connection.query("CREATE DATABASE `rspcahhb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;",  function(err,result){
            if (err) throw err;
            console.log("DB created")
        })
        const sql = "CREATE TABLE `volunteers` (`idvolunteers` int NOT NULL AUTO_INCREMENT, `volunteersforename` varchar(45) DEFAULT NULL, `volunteerssurname` varchar(45) DEFAULT NULL, `volunteersphone` bigint DEFAULT NULL, `volunteersemail` varchar(45) DEFAULT NULL, `volunteersaddress` varchar(45) DEFAULT NULL, `volunteerspostcode` varchar(10) DEFAULT NULL, `volunteersrole` int DEFAULT NULL, `volunteersavailability` varchar(200) DEFAULT NULL, `volunteerstime` varchar(45) DEFAULT NULL, `volunteerswhy` varchar(1000) DEFAULT NULL, `volunteersskills` varchar(1000) DEFAULT NULL, PRIMARY KEY (`idvolunteers`)) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;"
        connection.query(sql, function(err,result){
            if (err) throw err;
            console.log("TAble Created")
        })
    }
}
 