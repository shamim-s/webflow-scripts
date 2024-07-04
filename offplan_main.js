document.querySelectorAll('input[name*="url"]').forEach((e) => {
  e.value = window.location.href;
});
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

window.addEventListener("load", () => {
  document
    .querySelector(".quiz-card-btn")
    ?.addEventListener("click", function () {
      document
        .querySelector(".quiz-popup-overly")
        .classList.remove("popup-hidden");
      document.body.style.overflow = "hidden";
    });
  document.querySelector(".close-icon")?.addEventListener("click", function () {
    document.querySelector(".quiz-popup-overly").classList.add("popup-hidden");
    document.body.style.overflow = "auto";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("showPopup") && urlParams.get("showPopup") === "true") {
    Marquiz.showModal("664c59806242e700264f71b5");
  }
});

//
$(document).ready(function () {
  $("input[ms-code-phone-number]").each(function () {
    let input = this;
    let preferredCountries = $(input).attr("ms-code-phone-number").split(",");

    let iti = window.intlTelInput(input, {
      preferredCountries: preferredCountries,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    $.get(
      "https://ipinfo.io",
      function (response) {
        let countryCode = response.country;
        iti.setCountry(countryCode);
      },
      "jsonp"
    );
    input.addEventListener("change", formatPhoneNumber);
    input.addEventListener("keyup", formatPhoneNumber);
    function formatPhoneNumber() {
      let formattedNumber = iti.getNumber(
        intlTelInputUtils.numberFormat.NATIONAL
      );
      input.value = formattedNumber;
    }
    let form = $(input).closest("form");
    form.submit(function () {
      let formattedNumber = iti.getNumber(
        intlTelInputUtils.numberFormat.INTERNATIONAL
      );
      input.value = formattedNumber;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let propertySelectField = document.querySelector(".developer-select");
  let inputField = document.querySelector(".developer-filter");
  propertySelectField.addEventListener("change", function () {
    inputField.value = propertySelectField.value;
    console.log(inputField.value);
    const inputEvent = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    inputField.dispatchEvent(inputEvent);
  });
  let propertySelectField1 = document.querySelector(".custom-are-select");
  let inputField1 = document.querySelector(".custom-area-search");
  propertySelectField1.addEventListener("change", function () {
    inputField1.value = propertySelectField1.value;
    console.log(inputField1.value);
    const inputEvent = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    inputField1.dispatchEvent(inputEvent);
  });
});
