// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, cb) {
    orm.create("burgers", function(res) {
      cb(res);
    });
  },
  // need help
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
// burger_id??
// Export the database functions for the controller (catsController.js).
module.exports = burger;
