const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    },
    password: {
        type: String,
        required: [true, "Must be at least 8 characters"]
    },
    currentKyu: {
        type: String,
        required: [true, "Must choose your current ranking."],
        enum: [
        "White Belt",
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

StudentSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

StudentSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

StudentSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        console.log("HASHING");
        next();
        })
        .catch((err) => {
            console.log("Error!");
            console.log(err);
        })
});