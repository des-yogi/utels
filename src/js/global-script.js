document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

(function(){
  // Поддержка формата webp для background-img
  // 1. Проверяем, можно ли использовать Webp формат
  function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
  }
  // 2. Заменв формата изображений
  window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
      // Получаем значение каждого дата-атрибута
      let image = images[i].getAttribute('data-bg');
      // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
      images[i].style.backgroundImage = 'url(' + image + ')';
    }
    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
      // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
      let imagesWebp = document.querySelectorAll('[data-bg-webp]');
      for (let i = 0; i < imagesWebp.length; i++) {
        let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
        imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
      }
    }
  };
  // Разметка:
  //<div style="background-image: url('/images/image.webp')" data-bg="/images/image.jpg" data-bg-webp="/images/image.webp"></div>
}());


(function(){
  var bLazy = new Blazy({
    selector: '.b-lazy'
  });
}());

(function(){
  var phoneElems = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(phoneElems, function (item) {
    var phoneMask = IMask(
      item, {
        mask: '+{38} (\\000) 000 00 00',
        lazy: true // make placeholder always visible
    });
  });
}());


// $(document).ready(function(){
//   if(window.matchMedia('(min-width: 1366px)').matches){
//   // do functionality on screens bigger than 1366px
//     $("#sticker").sticky({
//       topSpacing: 100
//     });
//   }
//   return false;
// });

(function () {

  const setType = (lbl) => {
    setTimeout(function () {
      const orderForm = document.getElementById('order-form');
      //console.log(orderForm);
      if (orderForm) {
        const connectionTypeEl = orderForm.querySelector('input[name="connecType"]');
        connectionTypeEl.removeAttribute('value');
        connectionTypeEl.setAttribute('value', lbl);
      }
    }, 100);
  };

  document.addEventListener('click', function (event) {
      // Check if the clicked element is a button

      if (event.target.classList.contains('modal-open')) {
        // Find the closest form element
        const closestForm = event.target.closest('form');

        if (closestForm) {
          // Find radio buttons with one attribute "name" in the selected form
          //const radioButtons = closestForm.querySelectorAll('input[type="radio"]:checked');
          const radioButtons = closestForm.querySelectorAll('input[type="radio"]');
          console.log(radioButtons);

          if (!radioButtons) { return; }

          for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked === true) {
              //const labelText = closestForm.querySelector('radioButtons[i]' + 'label');
              //console.log(labelText.textContent);
            }
          }


          /*if (radioButtons.length > 0) {
            // Get the label text of the selected radio button
            const labelText = closestForm.querySelector('label[for="' + radioButtons[0].id + '"]').textContent;

            // Set the label text to the hidden input field
            //document.getElementById('hiddenInput').value = labelText;

            setType(labelText);

            // Log the result (you can replace this with your desired action)
            console.log('Label Text of Selected Radio Button:', labelText);
          }*/
        }
      }
    });
})()
