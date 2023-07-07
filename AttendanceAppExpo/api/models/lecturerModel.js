const mongoose = require('mongoose')

const lecturerSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Please enter ID"],
        default: 0,
    },

    email: {
        type: String,
        required: [true, "Please enter email"]
    },

    password: {
        type: String,
        required: [true, "Please enter password"]
    },

    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    subjects: [String]

},
    {
        timestamps: true,
    });


const Lecturer = mongoose.model("Lecturer", lecturerSchema);

module.exports = Lecturer;
