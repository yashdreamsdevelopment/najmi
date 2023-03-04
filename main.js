console.log("hello world");

window.addEventListener("scroll", (e) => {
  console.log(window.pageYOffset);
});

// client swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 10,

  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
