// Import the Express module
const express = require("express");

const {pageNotFound}=require('./controllers/error.js');

// Import the path module
const path = require('path');

// Set the port number
const PORT = 3005;

// Create an Express application
const app = express();

//set body-parser
app.use(express.urlencoded());

// Import the host router
const hostRouter = require("./routes/host");

// Import the store router
const storeRouter = require("./routes/store");

// Configure EJS view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'data')));

// Mount the store router for the / routes
app.use("/", storeRouter);

// Mount the host router to handle add-home routes
app.use("/", hostRouter);


// 404 Page
app.use(pageNotFound);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on Port http://localhost:${PORT}`);
});
