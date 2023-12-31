const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  timezone: 'utc',
  dateStrings: [
    'DATE',
    'DATETIME'
  ],
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});



connection.getConnection((err, conn) => {
  if (err) console.log('MySql DB not connected');
  if(conn) console.log('Connected to the MySql DB');
});


module.exports = connection;
