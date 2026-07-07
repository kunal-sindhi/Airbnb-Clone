// Import Node.js path and file system modules for data persistence
const path = require('path');
const fs = require('fs');

// In-memory placeholder array, but actual persistence is stored in JSON file
const registeredHomes = [];

// Home model stores home details and handles saving/loading from dataStorage.json
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // Save a new home by reading existing homes and appending this one
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const filePath = path.join(__dirname, '../', 'data', 'dataStorage.json');
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  // Fetch all stored homes from the JSON file and return them via callback
  static fetchAll(callback) {
    const filePath = path.join(__dirname, '../', 'data', 'dataStorage.json');
    fs.readFile(filePath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
