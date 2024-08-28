const express = require("express");
const cloudinary = require('cloudinary').v2;
const upload = require('./multer-config');
const { registerUser, loginUser } = require('../controllers/UserController');
const { isAuthenticatedUser } = require("../middleware/auth");

//Transfer cloudinary config in config file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/authenticate', isAuthenticatedUser, (req, res) => {
    res.status(200).send({userId: req.user._id});
});

module.exports = router;