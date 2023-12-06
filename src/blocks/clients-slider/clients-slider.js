// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  const clients = document.querySelector('.clients-slider__carousel');
  if (!clients) { return; }

  const clientsSlider = new Flickity( clients, {
    lazyLoad: 6,
    autoPlay: 4000,
    cellAlign: 'center',
    //percentPosition: false,
    //freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });
}());
