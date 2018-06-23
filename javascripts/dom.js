const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const printProjects = (projectsArray) => {
  let stringToPrint = '';
  stringToPrint +=  `<div class="row">`;
  stringToPrint +=  `<div class="col-4 project-list">`;
  stringToPrint +=   `<div class="list-group" id="list-tab" role="tablist">`;
  projectsArray.forEach((projects, i) => {
    if (i === 0) {
      stringToPrint +=   `<a class="list-group-item list-group-item-action active" id="list-${i}-list" data-toggle="list" href="#list-${i}" role="tab" aria-controls="${i}">${projects.title}</a>`;
    } else {
      stringToPrint +=   `<a class="list-group-item list-group-item-action" id="list-${i}-list" data-toggle="list" href="#list-${i}" role="tab" aria-controls="${i}">${projects.title}</a>`;
    }
  });
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;

  stringToPrint +=  `<div class="col-8">`;
  stringToPrint +=  `<div class="tab-content" id="nav-tabContent">`;

  projectsArray.forEach((project, j) => {
    if (j === 0) {
      stringToPrint +=   `<div class="tab-pane fade show active" id="list-${j}" role="tabpanel" aria-labelledby="list-${j}-list">`;
    } else {
      stringToPrint +=   `<div class="tab-pane fade" id="list-${j}" role="tabpanel" aria-labelledby="list-${j}-list">`;
    }
    stringToPrint +=   `<div class="jumbotron jumbo-project">`;
    stringToPrint +=   `<img src="${project.img}" class="${project.background}">`;
    stringToPrint +=    `<h1 class="display-4">${project.title}</h1>`;
    stringToPrint +=     `<p class="lead">${project.description}</p>`;
    stringToPrint +=     `<hr class="my-4">`;
    stringToPrint +=     `<p>${project.technologiesUsed}</p>`;
    stringToPrint +=     `<a class="btn btn-primary btn-lg" href="${project.url}" role="button">${project.buttonText}</a>`;
    stringToPrint +=     `<a class="btn btn-primary btn-lg github" href="${project.github}" role="button">GitHub</a>`;
    stringToPrint +=   `</div>`;
    stringToPrint += `</div>`;
  });
  stringToPrint += `</div>`;

  printToDom('#projects', stringToPrint);
};

const printBlogs = (blogsArray) => {
  let blogsToPrint = '';
  let paginationToPrint = '';
  const arrayLength = blogsArray.length;
  const paginationLength = Math.round(arrayLength / 3);
  blogsArray.forEach((blog, i) => {
    if (i >= 3) {
      blogsToPrint += `<div id="${blog.blogID}" href="#" class="list-group-item list-group-item-action flex-column align-items-start active d-none">`;
    } else {
      blogsToPrint += `<div id="${blog.blogID}" href="#" class="list-group-item list-group-item-action flex-column align-items-start active">`;
    }
    blogsToPrint +=  `<div class="d-flex w-100 justify-content-between">`;
    blogsToPrint +=    `<h5 class="mb-1">${blog.title}</h5>`;
    blogsToPrint +=    `<small>${blog.date}</small>`;
    blogsToPrint +=  `</div>`;
    blogsToPrint +=  `<p class="mb-1"><strong>Strengths:</strong> ${blog.strengths}</p>`;
    blogsToPrint +=  `<small><strong>Weaknesses:</strong> ${blog.weaknesses}</small>`;
    blogsToPrint +=  `</div>`;
  });

  paginationToPrint += `<ul class="pagination">`;
  paginationToPrint +=  `<li id='previous-list' class="page-item disabled"><a id="previous" class="page-link blog-page">Previous</a></li>`;
  for (let j = 1; j <= paginationLength; j++) {
    paginationToPrint +=  `<li class="page-item"><span id='page-${j}' class="page-link blog-page">${j}</span></li>`;
  }
  paginationToPrint +=  `<li id='next-list' class="page-item"><a id='next' class="page-link blog-page">Next</a></li>`;
  paginationToPrint +=  `</ul>`;

  printToDom('#print-blogs', blogsToPrint);
  printToDom('#print-pagination', paginationToPrint);
};

module.exports = {
  printProjects,
  printBlogs,
};
