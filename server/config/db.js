const mysql = require('mysql2');

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'studentdb',

})

db.connect((err) => {
    if (err) {
        console.log("Connection failed...");
    } else {
        console.log("Connection Established");
    }
});

module.exports = db;
