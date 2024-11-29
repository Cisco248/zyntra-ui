let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  index = (index + step + totalSlides) % totalSlides;

  const newTransformValue = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}
