document.addEventListener("DOMContentLoaded", function () {
  let downloadButton = document.querySelector("#download_pdf");
  console.log(downloadButton);
  downloadButton.addEventListener("click", function () {
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
