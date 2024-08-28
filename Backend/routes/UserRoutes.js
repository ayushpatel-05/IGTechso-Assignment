const express = require("express");
const { registerUser, loginUser } = require('../controllers/UserController');
const { isAuthenticatedUser } = require("../middleware/auth");



const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/authenticate', isAuthenticatedUser, (req, res) => {
    res.status(200).send({userId: req.user._id});
});

module.exports = router;