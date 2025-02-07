document.addEventListener('DOMContentLoaded', () => {
  const photoSliderContainers = document.querySelectorAll('.photo-slider-popup__slider');

  if (!photoSliderContainers.length) { return; }

  const options = {
    freeScroll: true,
    wrapAround: true,
    dragThreshold: 3,
    selectedAttraction: 0.01,
    friction: 0.15,
    //imagesLoaded: true,
    prevNextButtons: true,
    pageDots: false
  };

  [...photoSliderContainers].forEach(item => {
    imagesLoaded(item, function() {
      new Flickity(item, options);
    });
  });
});
