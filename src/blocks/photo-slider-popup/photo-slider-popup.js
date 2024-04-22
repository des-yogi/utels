(function() {
  const photoSliderContainer = document.querySelector('.photo-slider-popup__slider');
  //console.log(photoSliderContainer);

  if (!photoSliderContainer) { return; }

  const options = {
    freeScroll: true,
    wrapAround: true,
    //cellAlign: 'left',
    //contain: true,
    dragThreshold: 3,
    selectedAttraction: 0.01,
    friction: 0.15,
    //watchCSS: true,
    prevNextButtons: true,
    pageDots: false
  }

  const photoSlider = new Flickity(photoSliderContainer, options);
}());
