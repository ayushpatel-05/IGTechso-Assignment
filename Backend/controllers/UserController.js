const User = require("../model/userModel");
const sendToken = require("../utils/sendToken");

exports.registerUser = async function registerUser(req, res, next) {
    const user = new User(req.body);
    await user.save();

    sendToken(user, 201, res);
}