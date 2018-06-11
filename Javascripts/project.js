const writeToDom = (stringToPrint, divID) => {
  const printDiv = document.getElementById(divID);
  printDiv.innerHTML = stringToPrint;
};

const createProjectCards = (arrayOfObjects) => {
  let currentObject;
  let stringToPrint = '';
  for (let i = 0; i < arrayOfObjects.length; i++) {
    currentObject = arrayOfObjects[i];
    stringToPrint += `<div class='col-md-4'>`;
    stringToPrint += `<div class='card project-card' style='width: 18rem;'>`;
    stringToPrint += `<img class='card-img-top' src='${currentObject.imgURL}' alt='Cat Image'>`;
    stringToPrint += `<div class='card-body'>`;
    stringToPrint += `<h4 class='card-title'>${currentObject.title}</h4>`;
    stringToPrint += `<p class='card-text'>${currentObject.description}</p>`;
    stringToPrint += `<a href="${currentObject.gitHubURL}"class='btn btn-primary'>Go to${currentObject.id}</a>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  };
  writeToDom(stringToPrint, 'project-container');
};

function onLoad () {
  const data = JSON.parse(this.responseText);
  createProjectCards(data.projects);
};

function WTF () {
  console.log('OMG ERROR!!!');
};

const startApplication = () => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', onLoad);
  myRequest.addEventListener('error', WTF);
  myRequest.open('GET', '../db/projects.json');
  myRequest.send();
};

startApplication();
