const getFirebaseProjects = (firebaseConfig) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/`
    }).done((projects) => {
      resolve(projects);
    }).fail((err) => {
      reject(err);
    });
  });
};