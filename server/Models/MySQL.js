var mysql = require("mysql");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "vul3cj/62k7au4a83",
    database: "shoppingcartapp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
