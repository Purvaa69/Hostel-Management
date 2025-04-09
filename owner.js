const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    name: {  //Name of hostel 
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

const owners = mongoose.model("owners",ownerSchema)
module.exports = owners;

