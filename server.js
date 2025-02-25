const express = require('express');
const colors = require('colors');
const cors =require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')

//dotenv config
dotenv.config();
//rest object
const app =express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//route
//url =>http://localhost:8080
app.get('/',(req,res)=>
{
    return res.status(200).send("Welcome to food server App");
});
//PORT 
const PORT = process.env.PORT || 5000;
//Listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.white.bgMagenta);
});