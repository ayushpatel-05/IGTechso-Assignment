const express = require("express");
const upload = require('../config/multer-config');
// const { registerUser, loginUser } = require('../controllers/UserController');
const { reviewCourse, getReviewById, deleteReviewById, updateReviewById, getReviews } = require('../controllers/ReviewController');
const { isAuthenticatedUser } = require("../middleware/auth");
const { imageUpload } = require('../middleware/imageUpload');

const router = express.Router();




router.post('/review', isAuthenticatedUser, upload.single('reviewImage'), imageUpload, reviewCourse);//You need to be logged in to create a review
router.put('/review/:id', isAuthenticatedUser, upload.single('reviewImage'), imageUpload, updateReviewById)
router.get('/review/:id',getReviewById);
router.delete('/review/:id', isAuthenticatedUser, deleteReviewById);
router.get('/review', getReviews);

// router.post('/login', loginUser);
// router.post('/authenticate', isAuthenticatedUser, (req, res) => {
//     res.status(200).send({userId: req.user._id});
// });

module.exports = router;