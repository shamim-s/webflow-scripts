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
