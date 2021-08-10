// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  const clients = document.querySelector('.clients-slider__carousel');
  if (!clients) { return; }

  const heroSlider = new Flickity( clients, {
    lazyLoad: 3,
    autoPlay: 3500,
    cellAlign: 'center',
    percentPosition: false,
    //freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });
}());
