const { requires } = require("grunt");

/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport= require('passport');
const User = require("../models/User");
module.exports = {
  //login
  login: function(req,res) {
      passport.authenticate('local', function(err,user,info) {
          if(err || !user){
              return res.send({message: info.message,
            user
            });
          }
          
          req.login(user, function(err) {
              if(err) res.send(err);
            sails.log('User' +user.id+ 'has logged in')
            })
      })(req,res);
  },
//   logout
logout: function(req,res) {
    req.logout();
    res.redirect('/');
},
//Resgister function
register: function(reqq,res) {
    
    data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        description: req.body.description,
        
    }
    User.create(data).fetch().exec(function(err,user) {
        if(err) return res.negoiate(err);

        req.login(user, function(err) {
            if(err) return res.negoiate(err);
            sails.log('User' +user.id+ 'has logged in');
            return res.redirect('/')
        })
    })
}

};

