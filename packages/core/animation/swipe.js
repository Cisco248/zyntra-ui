function Swipe() {
  function slideLeftOnScroll(selector) {
    let element = document.querySelector(selector);
    if (!element) return;

    function checkScroll() {
      let rect = element.getBoundingClientRect();
      let windowHeight = window.innerHeight;
      element.style.transition = "transform 1s ease-in-out, opacity 0.5s";
      if (rect.top <= windowHeight - 300) {
        element.style.transform = "translateX(0px)";
        element.style.opacity = "1";
      } else {
        element.style.transform = "translateX(-500px)";
        element.style.opacity = "0";
      }
    }

    checkScroll();
    window.addEventListener("scroll", checkScroll);
  }

  // Usage
  slideLeftOnScroll(".about-bottom-left");

  function scaleCenterOnScroll(selector) {
    let element = document.querySelector(selector);
    if (!element) return;

    window.addEventListener("scroll", () => {
      let rect = element.getBoundingClientRect();
      let windowHeight = window.innerHeight;
      element.style.transition = "transform 1s ease-in-out, opacity .5s";
      if (rect.top <= windowHeight - 300) {
        element.style.opacity = "1";
        element.style.transform = "scale(1)";
      } else {
        element.style.opacity = "0";
        element.style.transform = "scale(.5)";
      }
    });
  }
  scaleCenterOnScroll(".about-bottom-center");

  function slideRightOnScroll(selector) {
    let element = document.querySelector(selector);
    if (!element) return;

    function checkScroll() {
      let rect = element.getBoundingClientRect();
      let windowHeight = window.innerHeight;
      element.style.transition = "transform 1s ease-in-out, opacity 0.5s";
      if (rect.top <= windowHeight - 300) {
        element.style.transform = "translateX(0px)";
        element.style.opacity = "1";
      } else {
        element.style.transform = "translateX(500px)";
        element.style.opacity = "0";
      }
    }

    // Initial check in case the element is already in view
    checkScroll();
    window.addEventListener("scroll", checkScroll);
  }

  // Usage
  slideRightOnScroll(".about-bottom-right");
}

Swipe();
