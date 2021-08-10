// document.addEventListener('DOMContentLoaded', function(){});
(function(){
  const utils = window.fizzyUIUtils;
  const hero = document.querySelector('.main-carousel');
  if (!hero) { return; }

  const heroSlider = new Flickity( hero, {
    lazyLoad: true,
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });

  const cellsButtonGroup = document.querySelector('.hero__dot-group--cells');
  const cellsButtons = utils.makeArray( cellsButtonGroup.children );

  // update buttons on select
  heroSlider.on( 'select', function() {
    const previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    let selectedButton = cellsButtonGroup.children[ heroSlider.selectedIndex ];
    previousSelectedButton.classList.remove('is-selected');
    selectedButton.classList.add('is-selected');
  });

  // cell select
  cellsButtonGroup.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, '.hero__dot' ) ) {
      return;
    }
    let index = cellsButtons.indexOf( event.target );
    heroSlider.select( index );
  });
  // previous
  const previousButton = document.querySelector('.hero__btn--prev');
  previousButton.addEventListener( 'click', function() {
    heroSlider.previous();
  });
  // next
  const nextButton = document.querySelector('.hero__btn--next');
  nextButton.addEventListener( 'click', function() {
    heroSlider.next();
  });

}());
