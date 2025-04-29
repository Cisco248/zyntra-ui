// function slideLeftOnScroll() {
//   let element = document.createAttribute("sloc-anim");
//   if (!element) return;

//   function checkScroll() {
//     let rect = element.getBoundingClientRect();
//     let windowHeight = window.innerHeight;
//     element.style.transition = "transform 1s ease-in-out, opacity 0.5s";
//     if (rect.top <= windowHeight - 300) {
//       element.style.transform = "translateX(0px)";
//       element.style.opacity = "1";
//     } else {
//       element.style.transform = "translateX(-500px)";
//       element.style.opacity = "0";
//     }
//   }

//   checkScroll();
//   window.addEventListener("scroll", checkScroll);
// }

// function scaleCenterOnScroll(selector) {
//   let element = document.querySelector(selector);
//   if (!element) return;

//   window.addEventListener("scroll", () => {
//     let rect = element.getBoundingClientRect();
//     let windowHeight = window.innerHeight;
//     element.style.transition = "transform 1s ease-in-out, opacity .5s";
//     if (rect.top <= windowHeight - 300) {
//       element.style.opacity = "1";
//       element.style.transform = "scale(1)";
//     } else {
//       element.style.opacity = "0";
//       element.style.transform = "scale(.5)";
//     }
//   });
// }

// function slideRightOnScroll(selector) {
//   let element = document.querySelector(selector);
//   if (!element) return;

//   function checkScroll() {
//     let rect = element.getBoundingClientRect();
//     let windowHeight = window.innerHeight;
//     element.style.transition = "transform 1s ease-in-out, opacity 0.5s";
//     if (rect.top <= windowHeight - 300) {
//       element.style.transform = "translateX(0px)";
//       element.style.opacity = "1";
//     } else {
//       element.style.transform = "translateX(500px)";
//       element.style.opacity = "0";
//     }
//   }

//   // Initial check in case the element is already in view
//   checkScroll();
//   window.addEventListener("scroll", checkScroll);
// }

// function zoomToFit(selector) {
//   let element = document.querySelector(selector);

//   if (!element) return;

//   window.addEventListener("scroll", () => {
//     let scrollY = window.scrollY;
//     let viewPoint = window.innerHeight;

//     if (scrollY - 200 >= viewPoint) {
//       element.style.transition = "transform 0.5s";
//       // element.style.transform = "translateZ(100px);";
//       element.style.transform = " scale(.3)";
//     } else {
//       element.style.top = "50%";
//       element.style.transform = "translateY(-50%)";
//       element.style.transition = "transform 0.5s";
//       element.style.transform = "scale(1)";
//     }
//   });
// }

// slideRightOnScroll(".about-bottom-right");
// scaleCenterOnScroll(".about-bottom-center");
// slideLeftOnScroll(".about-bottom-left");

// zoomToFit(".about-center-wrapper");
