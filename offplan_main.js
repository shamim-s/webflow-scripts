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
document.addEventListener("DOMContentLoaded", function () {
  const priceClassSelector = ".item_price_aed";
  function formatPrice(priceText) {
    priceText = priceText.replace("AED", "").trim();
    if (
      isNaN(priceText.replace(/,/g, "")) &&
      !/^\d+(\.\d+)?$/.test(priceText)
    ) {
      return priceText;
    }
    let isSimpleDecimal = /^[0-9]*\.[0-9]+$/.test(priceText);
    let priceNumber = parseFloat(priceText.replace(/,/g, ""));
    if (isSimpleDecimal) {
      return priceNumber.toFixed(1) + "M";
    } else if (priceNumber >= 1000000) {
      return (priceNumber / 1000000).toFixed(1) + "M";
    } else if (priceNumber >= 1000) {
      return (priceNumber / 1000).toFixed(1) + "K";
    } else {
      return priceNumber;
    }
  }
  function applyFormatting() {
    const priceElements = document.querySelectorAll(priceClassSelector);
    priceElements.forEach(function (element) {
      const originalText = element.textContent.trim();
      if (/Call\s*us/i.test(originalText)) {
        return;
      }
      const formattedText = formatPrice(originalText);
      element.textContent = formattedText;
    });
  }
  applyFormatting();
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === "childList" ||
        mutation.type === "subtree" ||
        mutation.type === "characterData"
      ) {
        applyFormatting();
      }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let downloadButton = document.querySelector("#download_pdf");
  console.log(downloadButton);
  downloadButton?.addEventListener("click", function () {
    let form = document.querySelector(".interest_form");
    let pdfUrl = document.getElementById("#pdf_Link");
    if (form.checkValidity()) {
      form.submit();
      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();

          let pdfUrl_link = pdfUrlField.href;

          if (pdfUrl) {
            window.location.href = pdfUrl_link;
            console.log(pdfUrl_link, "floor plan link is here");
          } else {
            console.error("PDF URL is not defined.");
          }
        },
        { once: true }
      );
    } else {
      form.reportValidity();
    }
  });
});
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
  let parent = document?.querySelector(".floorplan-section");
  let nestedCollection = document.querySelector(".floor_plans_list");
  if (nestedCollection === null) {
    parent.style.display = "none";
  } else {
    parent.style.display = "block";
  }
});
let propertySelectField = document.querySelector(".developer-select");
let inputField = document.querySelector(".developer-filter");
propertySelectField?.addEventListener("change", function () {
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
propertySelectField1?.addEventListener("change", function () {
  inputField1.value = propertySelectField1.value;
  console.log(inputField1.value);
  const inputEvent = new Event("input", {
    bubbles: true,
    cancelable: true,
  });
  inputField1.dispatchEvent(inputEvent);
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the original paragraph element
  let original = document.querySelector(".amenities_texts");
  let words = original?.textContent.split(",");
  // Create a new ul element
  let newList = document.createElement("ul");
  newList.classList.add("amenities__wrapper");
  words.forEach(function (word) {
    let listItem = document.createElement("li");
    listItem.textContent = word;
    newList.appendChild(listItem);
  });
  // Replace the original paragraph with the new list
  original.parentNode.replaceChild(newList, original);
});
