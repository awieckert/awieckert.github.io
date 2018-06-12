const firebaseConfig = {};

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
  getFirebaseKey().then((data) => {
    firebase.initializeApp(data.firebase);
    setFirebaseConfig(data.firebase);
  }).catch((err) => {
    console.error('Initializing Firebase failed: ', err);
  });
};

module.exports = {
  initializeFirebase,
  setFirebaseConfig,
  getFirebaseConfig,
};
