const firebaseProjects = require('./firebaseProjects.js');
const firebaseBlogs = require('./firebaseBlogs.js');

let firebaseConfig = {};

const setFirebaseConfig = (config) => {
  firebaseConfig = config;
};

const getFirebaseConfig = () => {
  return firebaseConfig;
};

const getFirebaseKey = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json').done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const initializeFirebase = () => {
  getFirebaseKey().then((datums) => {
    firebase.initializeApp(datums.firebase);
    setFirebaseConfig(datums.firebase);
    firebaseProjects.getProjects(getFirebaseConfig());
    firebaseBlogs.getBlogs(getFirebaseConfig());
  }).catch((err) => {
    console.error('Initializing Firebase failed: ', err);
  });
};

module.exports = {
  initializeFirebase,
  setFirebaseConfig,
  getFirebaseConfig,
};
