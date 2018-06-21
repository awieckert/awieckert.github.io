const dom = require('./dom.js');

const getFirebaseProjects = (firebaseConfig) => {
  return new Promise ((resolve, reject) => {
    const projectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects.json`,
    }).done((projects) => {
      if (projects !== null) {
        Object.keys(projects).forEach((key) => {
          projects[key].id = key;
          projectsArray.push(projects[key]);
        });
      }
      resolve(projectsArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getProjects = (firebaseCon) => {
  getFirebaseProjects(firebaseCon).then((data) => {
    dom.printProjects(data);
  }).catch((err) => {
    console.error('Getting firebase projects failed: ', err);
  });
};

module.exports = {
  getProjects,
};
