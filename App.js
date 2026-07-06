//Import the external module
const express=require('express');

//Declare the port number
const PORT=3000;

//Create an Express application
const app=express();

//Create a first Middleware
app.get('/',(req,res)=>{
  res.send("Welcome to the Home Page");
})

//Start the server
app.listen(PORT,()=>{
  console.log(`Server is running on Port http://localhost:${PORT}`)
})