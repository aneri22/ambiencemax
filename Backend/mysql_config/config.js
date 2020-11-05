var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ambi",
    insecureAuth : true,
    multipleStatements: true
});

module.exports = con;
