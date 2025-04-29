function slideUpOnScroll(selector) {
  let element = document.querySelector(selector);
  if (!element) return;

  function checkScroll() {
    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (rect.top <= windowHeight) {
      element.style.transition = "transform 3000ms ease-in-out, opacity 0.5s";
      element.style.transform = "translateY(0px)";
      element.style.opacity = "1";
    } else {
      element.style.transition = "transform 3000ms ease-in-out, opacity 0.5s";
      element.style.transform = "translateY(100%)";
      element.style.opacity = "0";
    }
  }

  // Initial check in case the element is already in view
  checkScroll();
  window.addEventListener("scroll", checkScroll);
}

// Usage
slideUpOnScroll(".about-top-wrapper");
