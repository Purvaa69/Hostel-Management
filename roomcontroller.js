const Room = require("../models/rooms");

exports.searchroom = async (req,res) => {  //Student search room function
    try {
        const {ownername,rentpermonth,type,isavailable, nearbymess} = req.query;
        const queryObj = {};
        if(ownername){
            queryObj.ownername = {$regex: ownername, $options: "i"};
        }
        if(rentpermonth){
            queryObj.rentpermonth = {$lte: rentpermonth};
            console.log(queryObj.rentpermonth);
        }
        if(type){
            queryObj.type = type;
        }
        if(isavailable){
            queryObj.isavailable = isavailable;
        }
        if(nearbymess){
            queryObj.nearbymess = nearbymess;
        }

        const rooms = await Room.find(queryObj).sort("rentpermonth");  //Sorted in ascending order considering rent
        res.status(200).json({
            status:"Success",
            results: rooms.length,
            data: {
                rooms,
            },
        });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error,
        });
    }
};

exports.createroom = async (req,res) => {  //Owner post room controller
    try {
        const newRoom = await Room.create(req.body)

        res.status(201).json({
            status: "Success",
            data: {
                newRoom,
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error,
        });
    }
}
