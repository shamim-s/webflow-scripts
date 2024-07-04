(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = "//script.marquiz.io/v2.js";
  j.onload = function () {
    if (document.readyState !== "loading") Marquiz.init(o);
    else
      document.addEventListener("DOMContentLoaded", function () {
        Marquiz.init(o);
      });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, "script", {
  host: "//quiz.marquiz.io",
  region: "eu",
  id: "6605da5a5318590026ec45da",
  autoOpen: 15,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false,
});
