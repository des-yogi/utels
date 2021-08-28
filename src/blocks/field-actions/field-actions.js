(function () {
  const agreementElems = document.querySelectorAll('.contacts__agreement');

  for (let i = 0; i < agreementElems.length; i++) {
    let agreementElem = agreementElems[i];
    const submitBtn = agreementElem.querySelector('.contacts__submit');
    const agreementCheckbox = agreementElem.querySelector('input[name=agreement]');

    if (agreementCheckbox) {
      agreementCheckbox.addEventListener('change', function (e) {
        if (!e.target.checked) {
          submitBtn.disabled = true;
        } else {
          submitBtn.disabled = false;
        }
      });
    }
  }

})();
