(function(){
  const coverForm = document.getElementById('coverage-form');
  const coverResult = document.getElementById('coverage-result');
  if (!coverForm) { return; }

  const coverResultCity = coverResult.querySelector('.coverage-result__city');
  const formSubmitBtn = coverForm.querySelector('#coverage-form-submit');
  const loader = coverForm.querySelector('.loader');
  const inputArr = coverForm.querySelectorAll('.field-text__input');
  const citySelect = coverForm.querySelector('.field-select__select');

  const coverResultShow = function () {
    if (!coverResult.classList.contains('show')) {
      coverResult.classList.add('show');
    }
    const coverResultCity = coverResult.querySelector('.coverage-result__city');
    const coverResultStreet = coverResult.querySelector('.coverage-result__street');
    const coverResultHouse = coverResult.querySelector('.coverage-result__house');
    const selectOptions = citySelect.options;

    for (let i = 0; i < selectOptions.length; i++) {
      let currentOption = selectOptions[i];
      if (currentOption.selected) {
        coverResultCity.textContent = currentOption.value;
      }
    }
    for (let j = 0; j < inputArr.length; j++) {
      let currentInput = inputArr[j];
      if (currentInput.name === 'street') {
        coverResultStreet.textContent = currentInput.value;
      }
      if (currentInput.name === 'house') {
        coverResultHouse.textContent = currentInput.value;
      }
    }
  }

  const checkEmptyInput = function () {
    let returnedBulean = true;
    for (let i = 0; i < inputArr.length; i++) {
      let currentInput = inputArr[i];
      let currentInputValue = currentInput.value;
      let voidFlag = !!currentInputValue;
      if (!voidFlag) {
        //currentInput.nextElementSibling.textContent = 'Это поле должно быть заполнено!';
        currentInput.style = 'border-color:#fd0000;';
        returnedBulean = false;
        break;
      }
      currentInput.style = 'border-color:#158e30;';
    }

    return returnedBulean;
  };

  const formSubmitBtnHandler = function (e) {
    e.preventDefault();
    if (checkEmptyInput()) {
      e.target.setAttribute('disabled', true);
      loader.classList.add('show');
      window.setTimeout(function () {
        e.target.removeAttribute('disabled');
        loader.classList.remove('show');
        coverResultShow();
      } , 5000);
    }
  };

  if (formSubmitBtn) {
    formSubmitBtn.addEventListener('click', formSubmitBtnHandler);
  }
}());
