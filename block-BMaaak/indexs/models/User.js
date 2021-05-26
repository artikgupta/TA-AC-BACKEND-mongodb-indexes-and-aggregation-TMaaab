
var mongoose = require("mongoose");

var Schema = mongoose.Schema

var userSchema = new Schema({
 name:String,
username:{type:String, unique:true},
email:{type:String, unique:true},
address: {
city:String,
state:String,
country:String,
pin :Number
}

  })
  userSchema.index({email:1,unique:true})
  userSchema.index({username:1,unique:true})
  userSchema.index({state:1,city:1})

  var User = mongoose.model('User', userSchema);

  module.exports = User;