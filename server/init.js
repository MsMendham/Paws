// to be run once before first load of server :))

const mysql = require('mysql');
const { createConnection } = require('net');
const { exit } = require('process');
const { json } = require('stream/consumers');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    
    insecureAuth : true
})

connection.query("CREATE DATABASE `rspcahhb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;", function(err,result){
     if (err) throw err;
    console.log("DB created")
   
})

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rspcahhb",
    insecureAuth : true
})

const sql = "CREATE TABLE `volunteers` (`idvolunteers` int NOT NULL AUTO_INCREMENT, `volunteersforename` varchar(45) DEFAULT NULL, `volunteerssurname` varchar(45) DEFAULT NULL, `volunteersphone` bigint DEFAULT NULL, `volunteersemail` varchar(45) DEFAULT NULL, `volunteersaddress` varchar(45) DEFAULT NULL, `volunteerspostcode` varchar(10) DEFAULT NULL, `volunteersrole` int DEFAULT NULL, `volunteersavailability` varchar(200) DEFAULT NULL, `volunteerstime` varchar(45) DEFAULT NULL, `volunteerswhy` varchar(1000) DEFAULT NULL, `volunteersskills` varchar(1000) DEFAULT NULL, PRIMARY KEY (`idvolunteers`)) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;"
        
connection.query(sql,function(err,result){
    if (err) throw err;
    console.log("TAble Created")
    
})