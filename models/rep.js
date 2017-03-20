var mongoose = require('mongoose')
    // bcrypt = require('bcrypt')


var repSchema = new mongoose.Schema({
  firstname: {type: String, required: true},
  // , minlength: 5, maxlength: 20},
  lastname: {type: String, required: true},
  password: {type: String, required: true},
    // , minlength: 5, maxlength: 20},
  email: {type: String, required: true},
  city: String,
  state: {type: String, required: true},
    // , minlength: 2, maxlength: 2},
  zip: {type: Number, required: true},
    // , min: 5, max: 5},
  county: String,
  party: {type: String, required: true},
  district: String,
  created_at: {type: Date, default: Date.now}
})

var Rep = mongoose.model('Rep', repSchema)

// Rep.methods.encrypt = function(password){
//   // return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

module.exports = Rep