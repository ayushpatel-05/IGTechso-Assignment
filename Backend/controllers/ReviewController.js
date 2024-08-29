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


exports.getReviewById = catchAsyncError(async function registerUser(req, res, next) {
    let { id } = req.params;

    const review = await Review.findById(id)
    .select("-_id -__v")
    .populate('user', '-_id -__v -email')
    .exec();

    console.log(review);
    res.status(200).send(review);
    // sendToken(user, 201, res);
});

//Need to also delete the associated cloudinary image
exports.deleteReviewById = catchAsyncError(async function registerUser(req, res, next) {
    let { id } = req.params;

    const review = await Review.deleteOne({_id: id});
    console.log(review);
    res.status(204).send("Review Deleted");
    // sendToken(user, 201, res);
});