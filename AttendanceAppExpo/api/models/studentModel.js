const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter email"]
    },

    password: {
        type: String,
        required: [true, "Please enter password"]
    },

    id: {
        type: Number,
        required: [true, "Please enter ID"],
        default: 0,
    },

    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    course: {
        type: String,
    },

},
    {
        timestamps: true,
    });


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
