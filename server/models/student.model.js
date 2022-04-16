const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Must be at least 2 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Must be at least 2 characters."]
    },
    email: {
        type: String,
        required: [true, "Must be at least 5 characters."]
    },
    password: {
        type: String,
        required: [true, "Must be at least 8 characters"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Passwords must match."]
    },
    currentKyu: {
        type: String,
        required: [true, "Must choose your current ranking."],
        enum: [
        "9th",
        "8th",
        "7th",
        "6th",
        "5th",
        "4th",
        "3rd",
        "2nd",
        "1st",
        "Black Belt"
    ]},
    trainingFor: {
        type: String,
        required: [true, "Must choose what you're kyu training for."],
        enum:[
        "9th",
        "8th",
        "7th",
        "6th",
        "5th",
        "4th",
        "3rd",
        "2nd",
        "1st",
        "Black Belt"
    ]}
}, { timestamps: true});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;