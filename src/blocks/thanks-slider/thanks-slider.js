(function() {
  const docSliderContainer = document.querySelector('.thanks-slider__slider');
  //console.log(photoSliderContainer);

  if (!docSliderContainer) { return; }

  const options = {
    freeScroll: true,
    wrapAround: true,
    cellAlign: 'left',
    //contain: true,
    dragThreshold: 3,
    selectedAttraction: 0.01,
    friction: 0.15,
    //watchCSS: true,
    prevNextButtons: true,
    pageDots: false
  }

  const docSlider = new Flickity(docSliderContainer, options);
}());
