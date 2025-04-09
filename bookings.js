const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    roomname : {
        type: String,
        required: true
    },
    ownername : {
        type: String,
        required: true
    },
    roomid : {
        type: String,
        required: true
    },
    userid : {
        type: String,
        required: true
    },
    totalamount : {
        type: Number,
        required: true
    },
    transactionid : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    }
})

const bookings = mongoose.model("bookings",bookingSchema)
module.exports = bookings;
