var express           = require('express'),
    testController   = express.Router();

//controller functions to be used below in route handling
testController.route('/')
  .get(function(req,res){
      res.render('pages/test');
  }) // serve home page, render template with user data from login info

  .post(function(req,res){
      var name = req.body.name;
      res.send(JSON.stringify(name));
  });

module.exports = testController;
