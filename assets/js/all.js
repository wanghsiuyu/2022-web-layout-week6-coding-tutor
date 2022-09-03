"use strict";

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  // autoplay: {
  //   delay: 1000,
  // },
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
    //bulletElement: 'a',
    clickable: true
  } // mousewheel: true,
  //keyboard: true,

});
//# sourceMappingURL=all.js.map
