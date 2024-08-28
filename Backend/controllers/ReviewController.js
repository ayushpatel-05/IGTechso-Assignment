const User = require("../model/userModel");
const Review = require('../model/reviewModel');
const sendToken = require("../utils/sendToken");
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorMessage = require('../utils/errorHandler');

exports.reviewCourse = catchAsyncError(async function registerUser(req, res, next) {
    let { title, stars, image, courseId } = req.body;
    let { user } = req;
    user = user._id;
    if(!courseId)courseId = 1;
    stars = parseInt(stars);
    
    const review = new Review({title, stars, image, user, courseId});
    await review.save();

    res.status(201).send("Review posted!!");
    // sendToken(user, 201, res);
});


exports.loginUser = catchAsyncError(async(req, res, next) => {
    const { email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorMessage('Please enter email and password', 400));
    }

    const user = await User.findOne({email}).select("+password");
    if(!user) {
        return next(new ErrorMessage("Invalid Email or Password", 401));
    }

    const isPasswordCorrect = user.comparePassword(password);

    if(!isPasswordCorrect) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    await sendToken(user, 200, res);
})