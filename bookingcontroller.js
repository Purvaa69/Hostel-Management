const bookingmodel = require("../models/bookings");

//Ye ho saka to karna kyuki iske liye alag booking ka page banana padega.

exports.bookroom = async (req,res) => {
    const {
        roomname,
        ownername,
        roomid,
        userid,
        totalamount} = req.body;  //data received from frontend

        try {
            const newbooking = new bookingmodel({
                roomname: roomname,
                ownername: ownername,
                roomid: roomid,
                userid: userid,
                studentname: studentname,
                totalamount: totalamount,
                transactionid: "1234", //Placeholder. Replace with actual transaction id of the booking
                status: "booked"
            })

            const booking = await newbooking.save()

            return res.status(200).json({
                Status: "Success",
                Data : {
                    booking  //Booking was successful. Redirect to Room info page with booked status
                }
            })
        } catch (error) {
            return res.status(400).json({
                Status: "Fail",
                message: error  //Redirect to Room Info page with Error status
            })
        }
}