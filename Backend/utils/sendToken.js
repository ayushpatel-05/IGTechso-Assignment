const sendToken = async (user, statusCode, res) => {
    const token = user.getJWTToken();

    const cookieOptions = {
        expires: new Date(Date.now() + 1*24*60*60*1000),
        httpOnly: false
    }

    res.status(statusCode).cookie('token', token, cookieOptions).json({
        success: true,
        user
    });
}

module.exports = sendToken;