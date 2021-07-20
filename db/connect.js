const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "zavi1234",
  database: "employee_tracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  //console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;