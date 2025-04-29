function zoomToFit(selector) {
  let element = document.querySelector(selector);

  if (!element) return;

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let viewPoint = window.innerHeight;

    if (scrollY - 200 >= viewPoint) {
      element.style.transition = "transform 0.5s";
      // element.style.transform = "translateZ(100px);";
      element.style.transform = " scale(.3)";
    } else {
      element.style.top = "50%";
      element.style.transform = "translateY(-50%)";
      element.style.transition = "transform 0.5s";
      element.style.transform = "scale(1)";
    }
  });
}

zoomToFit(".about-center-wrapper");
