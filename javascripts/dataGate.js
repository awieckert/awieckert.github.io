const firebaseAPI = require('./firebaseAPI.js');
const pagination = require('./paginationEvents.js');
const events = require('./events.js');
const animations = require('./animations.js');

const initializer = () => {
  firebaseAPI.initializeFirebase();
  pagination.addPaginationEvents();
  events.addScrollEvents();
  animations.addScrollEvent();
};

module.exports = initializer;
