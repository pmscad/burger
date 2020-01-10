const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set uo logic within those routes where required.

router.get("/", function(req, res) {
  burger.selectAll().then(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/burgers", function(req, res) {
//   console.log(req.body.burger_name);
//   burgers.insertOne(req.body.burger_name).then(function(result) {
//     //   Send back the ID of the new route
//     res.redirect("/");
//   });
// });

module.exports = router;
