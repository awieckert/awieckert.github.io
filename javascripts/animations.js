const animationElements = $('.animated');
const $window = $(window);

const addScrollEvent = () => {
  $window.on('scroll', ifInView);
};

const animationDelayLeft = (item) => {
  window.setTimeout(function () { item.addClass('slideInLeft'); item.removeClass('visibility'); } , 500);
};

const animationDelayRight = (item) => {
  window.setTimeout(function () { item.addClass('slideInRight'); item.removeClass('visibility'); }, 500);
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
      item.addClass('visibility');
    }
  });
};

module.exports = {
  addScrollEvent,
};
