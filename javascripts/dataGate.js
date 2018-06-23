const firebaseAPI = require('./firebaseAPI.js');
const pagination = require('./paginationEvents.js');

const initializer = () => {
  firebaseAPI.initializeFirebase();
  pagination.addPaginationEvents();
};

module.exports = initializer;
