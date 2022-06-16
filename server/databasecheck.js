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
        dayNum = (new Date().getDay() + 1).toString();
        console.log(dayNum + 1)

        // this.con.connect(function(err) {
        //     if (err) throw err;
        //     print('Hello')
        //     // if connection is successful
        //     this.con.query("SELECT * from rspcahhb.volunteers", function (err, result, fields) {
        //       // if any error while executing above query, throw error
        //       if (err) throw err;
        //       // if there is no error, you have the result
        //       console.log(result);
        //     });
        //   });

        this.con.query(`SELECT * from rspcahhb.volunteers;`, function (err, result, fields) {
        // hello = con.query(`SELECT volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersrole, volunteersavailability, volunteerstime FROM rspcahhb.volunteers WHERE volunteersavailability = "${dayNum}" AND volunteersemail != "";`, (err, rows, fields) => {
            print('22')
            if (err) {
                throw err; return 1
            }
            console.log('22')
            console.log(rows)
            return rows
            // console.log('The solution is: ', rows[0].solution)
        })
        // console.log(hello)

        console.log('25')
        con.end()

    }
}