document.addEventListener("DOMContentLoaded", function () {
  let parent = document.querySelector(".floorplan-section");
  let nestedCollection = document.querySelector(".floor_plans_list");
  if (nestedCollection === null) parent.style.display = "none";
  else parent.style.display = "block";
});
