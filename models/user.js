const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

//encrypts the apssword before saving to the db
userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt,  this.password, function (err, isMatch) {
        if(err) return callback(err);
        callback(null, isMatch);
    })
}

userSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", userSchema);
