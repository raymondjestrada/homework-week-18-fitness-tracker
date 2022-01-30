const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Enter a type of workout"
            },
            name: {
                type: String,
                required: "Enter an exericse's name"
            },

            duration: {
                type: Number
            },
            weight: {
                type: Number
            },

            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }
    ]


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

