const {cloudinaryConfig, dataUri} = require('../config/cloudinary-config');


const catchAsyncError = require('../middleware/catchAsyncError');
  
  exports.imageUpload = catchAsyncError(async (req, res, next) => {
    const cloudinary = cloudinaryConfig();
    const file = dataUri(req).content;
    const result = await cloudinary.uploader.upload(file , {
        folder:'Review Images'
     });
     req.body.image = result.url;
    next();
})
