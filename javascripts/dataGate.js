const firebaseAPI = require('./firebaseAPI.js');
const firebaseProjects = require('./firebaseProjects.js');

const initializer = () => {
  firebaseAPI.initializeFirebase().then((data) => {
    blogscall(firebaseAPI.getFirebaseConfig());
    firebasePorjects.getProjects(firebaseAPI.getFirebaseConfig());
  }).catch((err) => {
    console.error('Error after InitializeFirebase Call: ', err);
  });
};

module.exports = initializer;
