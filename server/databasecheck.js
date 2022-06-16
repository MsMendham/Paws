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
    checkDatabase(callback) {
        dayNum = (new Date().getDay() + 1).toString();
        var ret = []
        con.query(` SELECT volunteersforename, volunteerssurname, volunteersphone, volunteersemail, volunteersrole, volunteersavailability, volunteerstime FROM rspcahhb.volunteers WHERE volunteersavailability = "${dayNum}" AND volunteersemail != "";`, function (err, result, fields) {
            if (err) {
                throw err
            }
            var ret = new Array(result.length)
            for (let i = 0; i < result.length; i++) {
                temp = [result[i]['volunteersforename'], result[i]['volunteerssurname'], result[i]['volunteersphone'], result[i]['volunteersemail'], result[i]['volunteersrole'], result[i]['volunteersavailability'], result[i]['volunteerstime']]
                ret[i] = temp
            }
            return callback(ret);
        })
        con.end()
    }
}
