const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [40, "Name cannot exceed 40 characters"],
        minLength: [2, "Name should have more than 1 character"]
    },
    email: {
        type: String,
        require: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a vaild email"]
    },
    password: {
        type: String,
        require: [true, "Please enter your password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false
    }
});

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {//Use env here
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
     
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


userSchema.methods.getJWTToken = function() {
    return jwt.sign({id: this._id}, "SECRET_KEY", {
        expiresIn: '1d'
    })
}

     
module.exports = mongoose.model('User', userSchema);