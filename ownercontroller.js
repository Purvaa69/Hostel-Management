const Owner = require("../models/owner");

exports.getallowners = async (req,res) => {  //Check karne ke liye if owners database me add ho rahe hai ya nahi.
    //Future scope me isko ADMIN mode ke liye implement kar sakte.
    try {
        const owners = await Owner.find();

        res.status(200).json({
            status:"Success",
            results: owners.length,
            data: {
                owners,
            },
        });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error,
        });
    }
};

exports.ownerSignUp = async (req,res) => {  //Owner Registration
    try {
        const newOwner = await Owner.create(req.body)  //Form ka data idhar input me aayega

        res.status(201).json({
            status: "Success",
            data: {
                newOwner,  //Redirect to login page
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error,  // Redirect to Register page with error message
        });
    }
}

exports.ownerlogin = async (req,res) => {  //Owner Login 
    try {
        const {emailid, password} = req.body;  //Form ka data idhar input me aayega
        const owners = await Owner.findOne({emailid: emailid, password: password});  
        if(owners){
            return res.status(200).json({message : "Login Successful"})  //Redirect to Home/Landing page
        }
        else{
            return res.status(400).json({message: "Login Failed : Invalid Email or Password"});  //Redirect to Login page with error message
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error,     //Redirect to Login page with error message
        });
    }

}