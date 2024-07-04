let flag = false;
const developer = new Swiper(".swiper-developers", {
  effect: "slide",
  centeredSlides: flag,
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  createElements: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
const swiper = new Swiper(".area-swiper", {
  effect: "slide",
  centeredSlides: flag,
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  createElements: true,
  pagination: true,
  autoplay: true,
  breakpoints: {
    370: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// Function to check viewport width
function checkViewportWidth() {
  if (window.innerWidth <= 640) {
    flag = true;
  } else {
    flag = false;
  }
}
// Call the function initially to check viewport width
checkViewportWidth();
// Add a listener for window resize
window.addEventListener("resize", checkViewportWidth);
