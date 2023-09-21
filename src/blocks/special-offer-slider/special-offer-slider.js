(function(){
  const slideLazy = new Blazy({
    selector: '.b-lazy'
  });
  const utils = window.fizzyUIUtils;
  const specialOffers = document.querySelector('.special-offer-slider');
  if (!specialOffers) { return; }

  const specialOfferSlider = new Flickity( specialOffers, {
    cellAlign: 'left',
    //cellSelector: '.special-offer-slider__item',
    contain: true,
    dragThreshold: 3,
    selectedAttraction: 0.01,
    friction: 0.15,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: true,
    on: {
      // 'ready': function () {
      //   window.setTimeout(setSliderHeightToMax(this), 1000);
      //   //setSliderHeightToMax(this);
      // },
      'scroll': function () {
        slideLazy.revalidate();
      }
    }
  });

  function setSliderHeightToMax(slider) {
    slider.cells.forEach(cell => cell.element.style.height = '');

    let heights = slider.cells.map(cell => cell.element.offsetHeight),
        max = Math.max.apply(Math, heights);

    slider.cells.forEach(cell => cell.element.style.height = max + 'px');
    slider.element.children[0].style = `height: ${max}px;`
  }

  window.addEventListener('load', function () {
    setSliderHeightToMax(specialOfferSlider);
  });
  window.addEventListener('resize', function () {
    setSliderHeightToMax(specialOfferSlider);
  });
}());
