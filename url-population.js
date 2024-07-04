document.querySelectorAll('input[name*="url"]').forEach((e) => {
  e.value = window.location.href;
});
