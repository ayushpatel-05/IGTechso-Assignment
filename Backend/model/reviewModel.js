const mongoose = require("mongoose");
const validator = require("validator");


const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter review Title"],
        maxLength: [100, "Title cannot exceed 40 characters"],
        minLength: [2, "Title should have more than 1 character"]
    },
    stars: {
        type: Number,
        enum: [1,2,3,4,5],
        required: [true, "Please provide review stars out of five"],
    },
    viewCount: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        validator: [validator.isURL, "Please provide a correct URL"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    courseId: {
        //Since no instruction were mentioned to create a course model
        //I have made the course id as number and given it a default value
        // type: mongoose.Schema.Type.ObjectId, ref: 'Course',
        type: Number,
        defalut: 1,
        required: true,
    }
});


module.exports = mongoose.model('Review', reviewSchema);