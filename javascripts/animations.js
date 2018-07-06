const $animation_elements = $('.animated');
const $window = $(window);

const addScrollEvent = () => {
  $window.on('scroll resize', ifInView);
  $window.trigger('scroll');
};
$window.on('scroll resize', ifInView);
$window.trigger('scroll');

const ifInView = () => {

}

module.exports = {
  addScrollEvent,
};
