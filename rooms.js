const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    roomname : {
        type: String,
        required: true
    },
    ownername : {
        type: String,
        required: true
    },
    maxcount : {  //Maximum number of students the room can accomodate
        type: Number,
        required: true
    },
    phonenumber : {
        type: Number,
        required: true
    },
    rentpermonth : {
        type: Number,
        required: true
    },
    img : [],
    type : {  //Boys or Girls
        type: String,
        required: true
    },
    description : {  //To be displayed in search rooms tab
        type: String,
        required: true
    },
    isavailable : {  //Room availability
        type: Boolean,
        default: true
    },
    nearbymess : {
        type: Boolean,
        required: true
    }
})

const rooms = mongoose.model("rooms",roomSchema)
module.exports = rooms;
