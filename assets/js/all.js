"use strict";

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  //loop: true,
  autoplay: {
    delay: 1000
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true
});
//# sourceMappingURL=all.js.map
