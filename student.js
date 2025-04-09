const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const students = mongoose.model("students",studentSchema)
module.exports = students;
