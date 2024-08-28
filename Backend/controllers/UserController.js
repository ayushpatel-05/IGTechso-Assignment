const User = require("../model/userModel");
const sendToken = require("../utils/sendToken");
const catchAsyncError = require('../middleware/catchAsyncError');

exports.registerUser = catchAsyncError(async function registerUser(req, res, next) {
    const user = new User(req.body);
    await user.save();

    sendToken(user, 201, res);
});