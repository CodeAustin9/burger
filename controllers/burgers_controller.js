var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
router.get("/", function(req, res){
  res.redirect("/burger");
});


// Create all our routes and set up logic within those routes where required.
router.get("burgers", function(req, res) {
  burger.redirect(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create([
    "burger_name", devoured
  ], [
    req.body.burger_name, 
    req.body.devoured,
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

 burger.update({
    devoured: req.body.sleepy
  }, condition, function(result) {
    res.redirect("/burgers");
  });
});
router.delete("/burgers/delete/:id", function(req, res){
  var condition = "id = " + req.params.id;
  burger.delete(condition, function(){
    res.redirect('/');
  });
});
// Export routes for server.js to use.
module.exports = router;
