const express = require("express");
// const { registerUser, loginUser } = require('../controllers/UserController');
const { reviewCourse } = require('../controllers/ReviewController');
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.post('/review', isAuthenticatedUser, reviewCourse);//You need to be logged in to create a review

// router.post('/login', loginUser);
// router.post('/authenticate', isAuthenticatedUser, (req, res) => {
//     res.status(200).send({userId: req.user._id});
// });

module.exports = router;