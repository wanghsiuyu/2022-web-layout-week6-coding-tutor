"use strict";

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
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
  }
});
//# sourceMappingURL=all.js.map
