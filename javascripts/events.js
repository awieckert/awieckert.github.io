const addScrollEvents = () => {
  $(window).on('scroll', scrollEvent);
};

const scrollEvent = () => {
  const scrollPosition = $(window).scrollTop();
  if (scrollPosition > 0) {
    $('#main-nav').addClass('change-nav-color');
  } else if (scrollPosition === 0) {
    $('#main-nav').removeClass('change-nav-color');
  }
};

module.exports = {
  addScrollEvents,
};
