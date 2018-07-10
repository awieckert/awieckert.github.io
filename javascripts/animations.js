const animationElements = $('.animated');
const $window = $(window);

const addScrollEvent = () => {
  $window.on('scroll resize', ifInView);
  $window.trigger('scroll');
};

const animationDelayLeft = (item) => {
  window.setTimeout(function () { item.addClass('slideInLeft'); item.removeClass('d-none'); } , 1000);
};

const animationDelayRight = (item) => {
  window.setTimeout(function () { item.addClass('slideInRight'); item.removeClass('d-none'); }, 1000);
};

const ifInView = () => {
  const windowHeight = $window.height();
  const windowTop = $window.scrollTop();
  const windowBottom = (windowTop + windowHeight);
  animationElements.each(function () {
    const item = $(this);
    const elementHeight = item.outerHeight();
    const elementTop = item.offset().top;
    const elementBottom = (elementTop + elementHeight);

    if ((elementBottom >= windowTop) && (elementTop <= windowBottom) && item.hasClass('animate-left')) {
      animationDelayLeft(item);
    } else if ((elementBottom >= windowTop) && (elementTop <= windowBottom) && item.hasClass('animate-right')) {
      animationDelayRight(item);
    } else {
      item.removeClass('slideInRight');
      item.removeClass('slideInLeft');
      item.addClass('d-none');
    }
  });
};

module.exports = {
  addScrollEvent,
};
