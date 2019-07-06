// Set up MySQL connection.
var mysql = require("mysql");
var connection;

var env = process.env.JAWSDB_URL;

if (env) {
  connection = mysql.createConnection(env);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "9z5-gwF-kBn-BCy",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

// Export connection for our ORM to use.
module.exports = connection;