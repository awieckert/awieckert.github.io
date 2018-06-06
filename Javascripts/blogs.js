console.log("YAY!");

let firebaseConfig = {};

const setFirebaseConfig = (datums) => {
  firebaseConfig = datums;
};

const getFirebaseConfig = () => {
  return firebaseConfig;
};

const writeToDom = (stringToPrint, divID) => {
    let printDiv = document.getElementById(divID);
    printDiv.innerHTML = stringToPrint;
};


const createBlogCards = (arrayOfObjects) => {
    let currentObject;
    let stringToPrint = "";
    for(let i = 0; i < arrayOfObjects.length; i++){
        currentObject = arrayOfObjects[i];
        stringToPrint += `<div data-blogId="${currentObject.id}" class='col-md-11 mb-3' id='Blog " + i + "'>`;
        stringToPrint += "<div class='card'>";
        stringToPrint += "<div class='card-body'>";
        stringToPrint += `<h4 class='card-title'>${currentObject.title}</h4>`;
        stringToPrint += `<h5 class='card-subtitle mb-2 text-muted'>${currentObject.date}</h5>`;
        stringToPrint += `<h4>Strengths:</h4><p class='card-text'>${currentObject.strengths}</p><h4>Weaknesses:</h4><p class='card-text'>${currentObject.weaknesses}</p>`;
        stringToPrint += "<a href='#Blog " + (i - 1) + "' class='btn btn-primary'>Go to previous</a>";
        stringToPrint += "<a href='#Blog " + (i + 1) + "' class='btn btn-primary ml-3'>Go to next</a>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
    }
    writeToDom(stringToPrint, "blogs-container");
};


// function onLoad () {
//     const data = JSON.parse(this.responseText);
//     createBlogCards(data.blogs);
// };

// function onFail () {
//     console.log("SHIT! It Broke");
// };

const getApiKeys = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json').done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const callGetApiKeys = () => {
  getApiKeys().then((data) => {
    setFirebaseConfig(data.firebase);
    firebase.initializeApp(getFirebaseConfig());
  }).catch((err) => {
    console.error('Firebase did not initialize: ', err);
  });
};

const getAllBlogs = () => {
  return new Promise ((resolve, reject) => {
    const allBlogs = [];
    $.ajax(`${firebaseConfig.databaseURL}/blogs/blogs.json`).done((allFirebaseBlogs) => {
      if (allFirebaseBlogs != null) {
        Object.keys(allFirebaseBlogs).forEach((key) => {
          allFirebaseBlogs[key].id = key;
          allBlogs.push(allFirebaseBlogs[key]);
        });
      }
      resolve(allBlogs);
    }).fail((err) => {
      reject(err);
    });
  });
};

const printTheBlogs = () => {
  getAllBlogs().then((blogsArray) => {
    createBlogCards(blogsArray);
  }).catch((err) => {
    console.log('The Blogs Could not print: ', err);
  });
};

const addBlogEvent = () => {
  $('#navitem5').on('click', printTheBlogs);
};

const startApplication = () => {
    // let myRequest = new XMLHttpRequest;
    // myRequest.addEventListener("load", onLoad);
    // myRequest.addEventListener("error", onFail);
    // myRequest.open("GET", "../db/blogs.json");
    // myRequest.send();

    addBlogEvent();
    callGetApiKeys();
};

startApplication();