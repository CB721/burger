// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, cb);
    },
    update: function(id, cb) {
      orm.updateOne("burgers", id, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller
module.exports = burger;