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
