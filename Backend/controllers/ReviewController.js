const Review = require('../model/reviewModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorMessage = require('../utils/errorHandler');
const { formatReview } = require('../utils/formatResponse');

exports.reviewCourse = catchAsyncError(async function reviewCourse(req, res, next) {
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


exports.getReviewById = catchAsyncError(async function getReviewById(req, res, next) {
    let { id } = req.params;

    const review = await Review.findById(id)
    .exec();

    if(!review) {
        return next(new ErrorMessage("Review not Found", 404));
    }
    review.viewCount++;
    review.save();
    const response = await formatReview(review);

    res.status(200).send(response);
    // sendToken(user, 201, res);
});

//Need to also delete the associated cloudinary image
exports.deleteReviewById = catchAsyncError(async function deleteReviewById(req, res, next) {
    let { id } = req.params;

    const review = await Review.findById(id);

    if(!review.user.equals(req.user._id)) {
        return next(new ErrorMessage("Unauthorized", 401));
    }//Need to be tested

    if(!review) {
        return next(new ErrorMessage("Review not Found", 404));
    }
    await review.remove();
    console.log(review);
    res.status(204).send("Review Deleted");
    // sendToken(user, 201, res);
});


//Needs to be tested properly
exports.updateReviewById = catchAsyncError(async function updateReviewById(req, res, next) {
    let { id } = req.params;
    const { title, stars, image } = req.body;

    const review = await Review.findById(id);

    if(!review.user.equals(req.user._id)) {
        return next(new ErrorMessage("Unauthorized", 401));
    }//Need to be tested

    if(!review) {
        return next(new ErrorMessage("Review not Found", 404));
    }

    if(title)review.title = title;
    if(stars)review.stars = stars;
    if(image)review.image = image

    await review.save();
    res.status(200).send("Review Updated");
});


exports.getReviews = catchAsyncError(async function getReviews(req, res, next) {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;

    const reviews = await Review.find()
        .skip(skip)
        .limit(parseInt(limit))
        .exec();

    
    if (!reviews || reviews.length === 0) {
        return next(new ErrorMessage("No reviews found", 404));
    }

    const response = await Promise.all(
        reviews.map(async (review) => {
            review.viewCount++;
            await review.save();
            return formatReview(review); 
        })
    );

  
    res.status(200).send(response);
});