const express = require('express');
const path = require('path');

// Store controller methods for store page rendering
const { getHomes } = require('../controllers/storeController.js');
const { getBookings } = require('../controllers/storeController.js');
const { getFavouriteList } = require('../controllers/storeController.js');
const { getIndex } = require('../controllers/storeController.js');
const storeRouter = express.Router();

// Store homepage listing available homes
storeRouter.get('/', getIndex);

// User booking page
storeRouter.get('/bookings', getBookings);

// Browse homes listing page
storeRouter.get('/homes', getHomes);

// User favourites page
storeRouter.get('/favourites', getFavouriteList);

module.exports = storeRouter;