const firebaseAPI = require('./firebaseAPI.js');

const initializer = () => {
  firebaseAPI.initializeFirebase();
};

module.exports = initializer;
