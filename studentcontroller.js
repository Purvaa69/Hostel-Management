const Student = require("../models/student");

exports.getallstudents = async (req,res) => {  //Check karne ke liye if students database me add ho rahe hai ya nahi.
                                                //Future scope me isko ADMIN mode ke liye implement kar sakte.
    try {
        const students = await Student.find();

        res.status(200).json({
            status:"Success",
            results: students.length,
            data: {
                students,
            },
        });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error,
        });
    }
};

exports.studentSignUp = async (req,res) => {  //Register student 
    try {
        const newStudent = await Student.create(req.body);  //Form ka data idhar input me aayega

        res.status(201).json({
            status: "Success",
            data: {
                newStudent,  //Redirect to Login Page
            }
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error,  //Redirect to Register page with error message
        });
    }
}

exports.studentlogin = async (req,res) => {
    try {
        const {emailid, password} = req.body;  //Form ka data idhar input me ayega
        const student = await Student.findOne({emailid: emailid, password: password});  
        if(student){
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
