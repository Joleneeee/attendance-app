const mongoose = require('mongoose')

const checkinSchema = mongoose.Schema(

    {

        checkinCode: {
            type: Number,
            required: [true, "Please enter a checkin code"]
        },

        date: {
            type: String,
        },

        subjectCode: {
            type: String,
            required: [true, "Please enter a subject code"]
        },

        students: [String],

        time: {
            type: String,
            required: [true, "Please enter a time"]
          },

    },
    {
        timestamps: true
    }

);

const Checkin = mongoose.model('Checkin', checkinSchema);

module.exports = Checkin;