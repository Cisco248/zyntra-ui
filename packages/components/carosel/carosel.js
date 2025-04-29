let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;

  index = (index + step + totalSlides) % totalSlides;

  const newTransformValue = -index * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${newTransformValue}%)`;
}

let currentIndex = 0;
const slides = document.querySelectorAll(".service");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
let autoSlideInterval;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider(index) {
  currentIndex = (index + slides.length) % slides.length; // Loop around
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("activate", i === currentIndex);
  });
}

function nextSlide() {
  updateSlider(currentIndex + 1);
}

function prevSlide() {
  updateSlider(currentIndex - 1);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 10000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event Listeners
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    updateSlider(Number(dot.dataset.index));
    stopAutoSlide();
  });
});

// Initialize
updateSlider(currentIndex);
startAutoSlide();
