const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const printProjects = (projectsArray) => {
  let stringToPrint = '';
  projectsArray.forEach((project) => {
    stringToPrint +=  `<div class="card col-sm-3" style="width: 18rem;">`;
    stringToPrint +=  `<img class="card-img-top project-images" src="${project.thumbnail}" alt="Card image cap">`;
    stringToPrint +=  `<div class="card-body text-center">`;
    stringToPrint +=    `<h5 class="card-title">${project.title}</h5>`;
    stringToPrint +=    `<p class="card-text">${project.description}</p>`;
    stringToPrint +=  `</div>`;
    stringToPrint +=  `<div class="card-footer text-muted text-center">`;
    stringToPrint +=    `<a href="${project.url}" target='_blank' class="btn btn-primary">${project.buttonText}</a>`;
    stringToPrint +=  `</div>`;
    stringToPrint +=  `</div>`;
  });
  printToDom('#projects', stringToPrint);
};

module.exports = {
  printProjects,
};
