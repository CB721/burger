// Import connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableInput, value, cb) {
        // INSERT INTO burgers (burger_name, devoured) VALUES ('Classic American Burger', FALSE);
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (burger_name, devoured) VALUES (";
        queryString += "'";
        queryString += value.toString();
        queryString += "', FALSE);";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableInput, id, cb) {
        // UPDATE burgers_db.burgers SET devoured = 1 WHERE ID = 11;
        connection.query("UPDATE " + tableInput + " SET devoured = 1 WHERE ID = " + id, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;