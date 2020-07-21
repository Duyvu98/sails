/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
module.exports = {

  attributes: {
username: {
  type: 'string',
  required: true
},
email:{
  type: 'string',
  required: true
},
password:{
  type: 'string',
  required: true
},
description:{
  type: 'string',
},

},
customToJSON: function() {
    return __dirname.omit(this,['password'])
},
beforeCreate: function(user,bane) {
  bcrypt.genSalt(10, function(user, salt) {
    bcrypt.hash(user.password, salt, null, function(err,hash) {
      if(err) return bane(err);
      user.password = hash;
      return bane();
    })
  })
}
};
