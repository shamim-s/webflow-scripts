document.addEventListener("DOMContentLoaded", function () {
  // Get the original paragraph element
  let original = document.querySelector(".amenities_texts");
  let words = original.textContent.split(",");
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
