var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function(req, res, next){
  User.findOne({}, function(err, doc){
      if (err) {
          return res.send('Error!');
      }
      console.log({email: doc});
  });
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        name: 'null',
        email: email,
        content: 'null'
    });
    user.save();
    console.log(email);
    res.redirect('/home');
});

module.exports = router;