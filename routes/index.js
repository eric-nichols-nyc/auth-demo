var express = require('express');
var perf = require('execution-time-async')();
var router = express.Router();
perf.config();
var User=require('../models/user');


/* GET home page . */
router.get('/',ensureAuthenticated, function(req, res, next) {
  // get users from dabase
  User.find({},function(err,users){
    if(err) throw err;
    res.render('index',{users:users, title: 'Members'});
  });
});
function ensureAuthenticated(req,res,next){
  console.log('afsafsdfd',req.user)
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/users/login')
}
module.exports = router;
