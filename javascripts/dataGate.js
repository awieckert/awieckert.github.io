const firebaseAPI = require('./firebaseAPI.js');
const pagination = require('./paginationEvents.js');
const events = require('./events.js');

const initializer = () => {
  firebaseAPI.initializeFirebase();
  pagination.addPaginationEvents();
  events.addScrollEvents();
};

module.exports = initializer;
