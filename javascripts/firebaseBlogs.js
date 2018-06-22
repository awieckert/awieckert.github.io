const dom = require('./dom.js');

const getAllBlogs = (firebaseConfig) => {
  return new Promise ((resolve, reject) => {
    const blogsArray = [];
    $.ajax({
      method: `GET`,
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    }).done((data) => {
      if (data !== null) {
        Object.keys(data).forEach((key) => {
          data[key].id = key;
          blogsArray.push(data[key]);
        });
      };
      resolve(blogsArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getBlogs = (firebaseCon) => {
  getAllBlogs(firebaseCon).then((blogArray) => {
    dom.printBlogs(blogArray);
  }).catch((err) => {
    console.error('Failed to retrieve blogs: ', err);
  });
};

module.exports = {
  getBlogs,
};
