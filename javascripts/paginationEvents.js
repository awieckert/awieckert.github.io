let initialRange = [1, 2, 3,];

const addPaginationEvents = () => {
  $('body').on('click', '.blog-page', paginationStuff);
};

const paginationStuff = (e) => {
  const pageNumberClicked = (($(e.target).text()) * 1);
  const rangeMax = (pageNumberClicked * 3);
  const rangeToInclude = [(rangeMax - 2), (rangeMax - 1), rangeMax,];
  if (initialRange !== rangeToInclude) {
    $(`#Blog-${initialRange[0]}, #Blog-${initialRange[1]}, #Blog-${initialRange[2]}`).addClass('d-none');
    $(`#Blog-${rangeToInclude[0]}, #Blog-${rangeToInclude[1]}, #Blog-${rangeToInclude[2]}`).removeClass('d-none');
    initialRange = rangeToInclude;
  }
};

module.exports = {
  addPaginationEvents,
};
