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
  const targetValue = ($(e.target).text() * 1);

  if (Number.isInteger(targetValue)) {
    if (targetValue === paginationLength) {
      $('#next-list').addClass('disabled');
      $('#previous-list').removeClass('disabled');
    } else if (targetValue === 1) {
      $('#previous-list').addClass('disabled');
      $('#next-list').removeClass('disabled');
    } else if (targetValue < paginationLength) {
      $('#next-list').removeClass('disabled');
      $('#previous-list').removeClass('disabled');
    }
    pageNumberClicked = (($(e.target).text()) * 1);
    rangeMax = (pageNumberClicked * 3);
    rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
    currentPage = pageNumberClicked;
  } else if (e.target.id === 'previous') {
    if (currentPage > 1) {
      if (currentPage === 2) {
        $('#previous-list').addClass('disabled');
      }
      currentPage = currentPage - 1;
      rangeMax = (currentPage * 3);
      rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
      if (currentPage <= 4) {
        $('#next-list').removeClass('disabled');
      }
    }
  } else if (e.target.id === 'next') {
    if (currentPage < paginationLength) {
      if (currentPage === (paginationLength - 1)) {
        $('#next-list').addClass('disabled');
      }
      currentPage = currentPage + 1;
      rangeMax = (currentPage * 3);
      rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
    }
    if (currentPage > 1) {
      $('#previous-list').removeClass('disabled');
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
