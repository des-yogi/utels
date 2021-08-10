(function () {
  const submitBtn = document.querySelector('.contacts__submit');
  const agreementCheckbox = document.querySelector('input[name=agreement]');

  const agreementHandler = function (e) {
    if (!this.checked) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  };

  if (agreementCheckbox) {
    agreementCheckbox.addEventListener('change', agreementHandler);
  }
})();
