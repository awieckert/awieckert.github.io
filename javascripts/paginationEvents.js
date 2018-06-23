let initialRange = [1, 2, 3,];
let currentPage = 1;

const addPaginationEvents = () => {
  $('body').on('click', '.blog-page', paginationStuff);
};

const paginationStuff = (e) => {
  const paginationLength = (($('.blog-page').length) - 2);
  let pageNumberClicked;
  let rangeMax;
  let rangeToInclude = [];

  if (Number.isInteger($(e.target).text() * 1)) {
    pageNumberClicked = (($(e.target).text()) * 1);
    rangeMax = (pageNumberClicked * 3);
    rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
    currentPage = pageNumberClicked;
  } else if (e.target.id === 'previous') {
    if (currentPage > 1) {
      currentPage = currentPage - 1;
      rangeMax = (currentPage * 3);
      rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
    }
  } else if (e.target.id === 'next') {
    if (currentPage < paginationLength) {
      currentPage = currentPage + 1;
      rangeMax = (currentPage * 3);
      rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
    }
  }

  $('.blog-page').removeClass('current');
  $(`#page-${currentPage}`).addClass('current');

  if (initialRange !== rangeToInclude) {
    $(`#Blog-${initialRange[0]}, #Blog-${initialRange[1]}, #Blog-${initialRange[2]}`).addClass('d-none');
    $(`#Blog-${rangeToInclude[0]}, #Blog-${rangeToInclude[1]}, #Blog-${rangeToInclude[2]}`).removeClass('d-none');
    initialRange = rangeToInclude;
  }
};

module.exports = {
  addPaginationEvents,
};
