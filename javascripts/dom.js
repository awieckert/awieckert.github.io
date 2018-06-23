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
  paginationToPrint +=  `<li class="page-item"><a id="previous" class="page-link blog-page">Previous</a></li>`;
  for (let j = 1; j <= paginationLength; j++) {
    paginationToPrint +=  `<li class="page-item"><span id='page-${j}' class="page-link blog-page">${j}</span></li>`;
  }
  paginationToPrint +=  `<li class="page-item"><a id='next' class="page-link blog-page">Next</a></li>`;
  paginationToPrint +=  `</ul>`;

  printToDom('#print-blogs', blogsToPrint);
  printToDom('#print-pagination', paginationToPrint);
};

module.exports = {
  printProjects,
  printBlogs,
};
