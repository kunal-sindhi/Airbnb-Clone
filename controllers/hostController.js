// Import the Home model for creating and retrieving home entries
const Home = require('../models/home.js');

// Render the form for adding a new home
exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', { pageTitle: 'add Home', currentPage: 'Add Home' });
};

// Handle submission of the add-home form
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  // Render confirmation page after saving the home
  res.render('host/home-Added', {
    pageTitle: 'Home Added Successfully',
    currentPage: 'Home Added',
  });
};

// Retrieve all homes for the host and render the list view
exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('host/host-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Host Homes List',
      currentPage: 'host-homes',
    });
  });
};






