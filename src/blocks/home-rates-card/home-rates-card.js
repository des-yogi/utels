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
    const megogoPrice = card.querySelector('.home-rates-card__price-num');
    const megogoPriceContent = megogoPrice.textContent;
    const megogoRateInput = card.querySelector('.megogo-select__rate');

    const btnModalOpen = card.querySelector('.btn.modal-open');
    const btnModalOpenDataset = btnModalOpen.dataset.bsWhatever;

    const initSelect = function (select) {
      const currentPrice = parseInt(megogoPriceContent, 10) + parseInt(select.value, 10);
      return currentPrice;
    };

    const resetPriceContent = function () {
      megogoPrice.textContent = megogoPriceContent;
    };

    const priceHandler = function (e) {
      const initPriceContent = megogoPriceContent;
      megogoPrice.textContent = parseInt(initPriceContent, 10) + parseInt(e.target.value) + '';
      megogoRateInput.value = megogoSelect.options[megogoSelect.selectedIndex].text;

      if (btnModalOpenDataset) {
        btnModalOpen.dataset.bsWhatever = `${btnModalOpenDataset} + Megogo: ${megogoRateInput.value}`;
      }
    };

    const calcSelectValue = function (select, flag) {

      if (flag === true) {
        megogoPrice.textContent = initSelect(megogoSelect) + '';
        megogoRateInput.value = select.options[select.selectedIndex].text;

        if (btnModalOpenDataset) {
          btnModalOpen.dataset.bsWhatever = `${btnModalOpenDataset} + Megogo: ${megogoRateInput.value}`;
        }
        select.addEventListener('change', priceHandler);
      }

      else {
        select.removeEventListener('change', priceHandler);
        resetPriceContent();
        megogoRateInput.value = '';

        if (btnModalOpenDataset) {
          btnModalOpen.dataset.bsWhatever = `${btnModalOpenDataset}`;
        }
      }
    };

    if (megogoToggler && megogoSelect) {

      megogoToggler.addEventListener('change', function (e) {
        if (megogoToggler.checked) {
          megogoSelect.removeAttribute('disabled');
          calcSelectValue(megogoSelect, true);
        }
        else {
          megogoSelect.setAttribute('disabled', 'true');
          calcSelectValue(megogoSelect, false);
        }
      });
    }

    const moreBtnClickpriceHandler = function (e) {
      flipElem.classList.toggle('home-rates-card__inner--backface');
    };

    if (moreBtn && returnBtn) {
      moreBtn.addEventListener('click', moreBtnClickpriceHandler);
      returnBtn.addEventListener('click', moreBtnClickpriceHandler);
    }
  }
}());
