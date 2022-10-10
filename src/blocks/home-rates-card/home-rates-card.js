(function(){
  const utils = window.fizzyUIUtils;
  const rates = document.querySelector('.home-rates-card__slider');
  if (!rates) { return; }

  const ratesSlider = new Flickity( rates, {
    cellAlign: 'left',
    contain: true,
    dragThreshold: 3,
    selectedAttraction: 0.01,
    friction: 0.15,
    //watchCSS: true,
    prevNextButtons: false,
    pageDots: false
  });
}());

(function(){
  const cardsAll = document.querySelectorAll('.home-rates-card');
  if (!cardsAll) { return; }

  for (let i = 0; i < cardsAll.length; i++) {
    const card = cardsAll[i];
    const moreBtn = card.querySelector('.home-rates-card__btn--info');
    const returnBtn = card.querySelector('.btn--return');
    const flipElem = card.querySelector('.home-rates-card__inner');
    const megogoToggler = card.querySelector('.field-toggler__input');
    const megogoSelect = card.querySelector('.field-select__select');

    if (megogoToggler && megogoSelect) {
      console.log(megogoToggler);

      megogoToggler.addEventListener('change', function (e) {
        if (megogoToggler.checked) {
          megogoSelect.removeAttribute('disabled');
        }
        else {
          megogoSelect.setAttribute('disabled', 'true');
        }
      });
    }


    const moreBtnClickHandler = function (e) {
      flipElem.classList.toggle('home-rates-card__inner--backface');
    };

    if (moreBtn && returnBtn) {
      moreBtn.addEventListener('click', moreBtnClickHandler);
      returnBtn.addEventListener('click', moreBtnClickHandler);
    }
  }
}());
