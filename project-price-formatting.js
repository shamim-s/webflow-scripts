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
