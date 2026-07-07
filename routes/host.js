const express = require('express');
const hostRouter = express.Router();
const path = require('path');

// Host controller methods for rendering add-home pages and listing homes
const { getAddHome } = require('../controllers/hostController.js');
const { postAddHome } = require('../controllers/hostController.js');
const { getHostHomes } = require('../controllers/hostController.js');

// Display the add-home page
hostRouter.get('/add-home', getAddHome);

// Process add-home form submission
hostRouter.post('/add-home', postAddHome);

// Display the host's home list
hostRouter.get('/host-home-list', getHostHomes);




module.exports=hostRouter;
