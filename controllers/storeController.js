// Import the Home model to access stored home data
const Home = require('../models/home.js');

// Render a list of all homes for browsing
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currentPage: 'Home',
    });
  });
};

// Render the store homepage with all available homes
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index',
    });
  });
};

// Render the bookings page for the current user
exports.getBookings = (req, res, next) => {
  res.render('store/booking', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings',
  });
};

// Render the user's favourite homes list
exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/favourite-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'My Favourites',
      currentPage: 'favourites',
    });
  });
};
