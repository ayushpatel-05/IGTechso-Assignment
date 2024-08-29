const User = require('../model/userModel');

exports.formatReview = async function(reviewDocument) {
    const user = await User.findById(reviewDocument.user);
    const review = reviewDocument.toObject();
    delete review._id;
    delete review.__v;

    review.user = user.name;
    return review;
}