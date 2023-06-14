(function () {
  //const agreementElems = document.querySelectorAll('.contacts__agreement');
  const agreementElems = document.querySelectorAll('[class$="__agreement"]');

  for (let i = 0; i < agreementElems.length; i++) {
    let agreementElem = agreementElems[i];
    //const submitBtn = agreementElem.querySelector('.contacts__submit');
    const submitBtn = agreementElem.querySelector('button[type=submit]');
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

// (function () {
//   const formsArr = document.querySelectorAll('form');
//   const regex = /\+(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})/;
//   if (!formsArr) return;

//   for (let i = 0; i < formsArr.length; i++) {
//     let maskedTel = formsArr[i].querySelector('.phone-mask');
//     let submitBtn = formsArr[i].querySelector('button[type=submit]');
//     //console.log(maskedTel);

//     maskedTel.addEventListener('input', function (e) {
//       let str = e.target.value;
//       //console.log(regex.test(str));

//       if (str.match(regex) === null) {
//           submitBtn.disabled = true;
//       } else {
//           submitBtn.disabled = false;
//       }
//     });
//   }
// })();
