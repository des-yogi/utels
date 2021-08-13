(function(){
  const utils = window.fizzyUIUtils;
  const rates = document.querySelector('.home-rates-card__slider');
  if (!rates) { return; }

  const ratesSlider = new Flickity( rates, {
    cellAlign: 'left',
    contain: true,
    dragThreshold: 5,
    //watchCSS: true,
    prevNextButtons: false,
    pageDots: false
  });

  //const cellsButtonGroup = document.querySelector('.hero__dot-group--cells');
  //const cellsButtons = utils.makeArray( cellsButtonGroup.children );

  // update buttons on select
  /*heroSlider.on( 'select', function() {
    const previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    let selectedButton = cellsButtonGroup.children[ heroSlider.selectedIndex ];
    previousSelectedButton.classList.remove('is-selected');
    selectedButton.classList.add('is-selected');
  });*/

  // cell select
  /*cellsButtonGroup.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, '.hero__dot' ) ) {
      return;
    }
    let index = cellsButtons.indexOf( event.target );
    heroSlider.select( index );
  });*/
  // previous
  /*const previousButton = document.querySelector('.hero__btn--prev');
  previousButton.addEventListener( 'click', function() {
    heroSlider.previous();
  });*/
  // next
  /*const nextButton = document.querySelector('.hero__btn--next');
  nextButton.addEventListener( 'click', function() {
    heroSlider.next();
  });*/

}());

(function(){
  const cardsAll = document.querySelectorAll('.home-rates-card');
  if (!cardsAll) { return; }

  for (let i = 0; i < cardsAll.length; i++) {
    const card = cardsAll[i];
    const moreBtn = card.querySelector('.home-rates-card__btn--info');
    const returnBtn = card.querySelector('.btn--return');
    const flipElem = card.querySelector('.home-rates-card__inner');
    //console.log(flipElem);

    const moreBtnClickHandler = function (e) {
      flipElem.classList.toggle('home-rates-card__inner--backface');
    };

    if (moreBtn && returnBtn) {
      moreBtn.addEventListener('click', moreBtnClickHandler);
      returnBtn.addEventListener('click', moreBtnClickHandler);
    }
  }
}());
