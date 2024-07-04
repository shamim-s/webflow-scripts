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
