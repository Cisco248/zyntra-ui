function infiniteRotate(className, imageName, speed) {
  let round = document.querySelector(className);
  let image = document.querySelector(imageName);
  if (!round && !image) return;

  let angle = 0;

  function rotate() {
    angle = (angle + speed) % 360;
    round.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
  }

  rotate();

  function imageRotate() {
    angle = (angle + speed) % 360;
    image.style.transform = `rotate(${-angle}deg)`;
    requestAnimationFrame(imageRotate);
  }

  imageRotate();
}

// Usage
infiniteRotate(".circle-2", ".circle-img-1", 0.2);
