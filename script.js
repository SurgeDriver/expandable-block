var swiper = new Swiper(".mySwiper", {
  width: 240,
  spaceBetween: 16,
  grabCursor: true,
  centeredSlides:true,
  slidesPerView: 1,

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});