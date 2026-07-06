// Import the Express module
const express=require('express');

// Set the port number
const PORT=3000;

// Create an Express application
const app=express();

// Define the middleware
app.get('/',(req,res)=>{
  res.send(`Welcome to our page:
    <a href='/add-home'>Add Home</a>`
  );
})

app.get('/add-home',(req,res)=>{
  res.send(`
    <h1>Register Your Home on AirBnB
</h1>
<form action="/add-home" method="POST">
<input type="text" name="houseName" placeholder="Enter your House Name"><br>
<input type="text" name="price" placeholder="Price Per Night"><br>
<input type="text" name="location" placeholder="Location"><br>
<input type="text" name="rating" placeholder="Rating"><br>
<input type="text" name="photoURL" placeholder="Enter Photo URL"><br>
<input type="submit" value="submit">
</form>
    `)
})

app.post('/add-home',(req,res,next)=>{
res.send(`Home Registered Successfully`)
})

//Start the server
app.listen(PORT,()=>{
  console.log(`Server is running on Port http://localhost:${PORT}`)
})