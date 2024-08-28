const cloudinary = require('cloudinary').v2;
const path = require('path')
const DatauriParser = require('datauri/parser');

const dUri = new DatauriParser();
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
//Transfer cloudinary config in config file
const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  return cloudinary;

}
module.exports = {
  cloudinaryConfig,
  dataUri
};