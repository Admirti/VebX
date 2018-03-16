const express = require('express');
const router = express.Router();
var User = require('../../models/user')


router.get('/admin', (req, res) => {
    User.findOne({}, function(err, doc){
        if (err) {
            return res.send('Error!');
        }
        console.log({email: doc});
        res.render('index', {email: doc});
    });
});


module.exports = router;