const express = require("express");
const dotenv = require("dotenv").config();  //.env file configuration {Isme Port aur MongoDB ka Connection String store karna}
const cors = require("cors"); 
const roomsroute = require('./routes/roomsroute');
const studentsroute = require('./routes/studentroutes');
const ownersroute = require('./routes/ownerroutes');
const bookingroute = require('./routes/bookingroutes')
const dbConfig = require("./db");   //Database connection
dotenv.config;
const app = express();
app.use(cors());  //allows web servers to control which origins (domains, schemes, or ports) can access their resources,
//  enabling controlled access to resources located outside a given domain while respecting the browser's same-origin policy

//isme paths edit kar sakta hai if needed

const port = process.env.PORT || 5000;
app.use(express.json());  //setup middlewares
app.use(express.urlencoded({extended:true}));
app.use('/api/rooms',roomsroute)
app.use('/api/students',studentsroute)
app.use('/api/owners',ownersroute)
app.use('/api/booking',bookingroute)

app.listen(port, () => console.log(`Server is running on port : ${port}`));