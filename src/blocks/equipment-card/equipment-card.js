// document.addEventListener('DOMContentLoaded', function(){});

/*(function(){
  // init Isotope
  const iso = new Isotope( '.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  var filtersElem = document.querySelector('.btn-filter-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.btn-filter-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }

}());*/

(function(){
  // change is-checked class on buttons
  const buttonGroups = document.querySelectorAll('.btn-filter-group');
  const filteredElems = document.querySelectorAll('.grid-item');

  for ( let i = 0; i < buttonGroups.length; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( e ) {
      let currentBtn = e.target;
      // only work with buttons
      if ( !matchesSelector( currentBtn, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      currentBtn.classList.add('is-checked');
      //console.log(`Кнопка: ${currentBtn.dataset.filter}`);

      for (let i = 0; i < filteredElems.length; i++) {
        currentItem = filteredElems[i];

        if (!currentItem.matches(`.${currentBtn.dataset.filter}`)) {
          //currentItem.style = 'display:none;';
          currentItem.setAttribute('will-change', 'transform');
          currentItem.animate([
            // keyframes
            { transform: 'scale3d(1, 1, 1)' },
            { transform: 'scale3d(0.3, 0.3, 0.3)' }
          ], {
            // timing options
            duration: 150,
            iterations: 1
          });
          currentItem.style = 'display:none;';
          currentItem.removeAttribute('will-change');
        }

        if ( currentItem.matches(`.${currentBtn.dataset.filter}`) || currentBtn.dataset.filter == 'all' ) {
          //console.log('Совпало');
          //currentItem.style = 'display:block;';
          currentItem.setAttribute('will-change', 'transform');
          currentItem.animate([
            // keyframes
            { transform: 'scale3d(0.3, 0.3, 0.3)' },
            { transform: 'scale3d(1, 1, 1)' }
          ], {
            // timing options
            duration: 150,
            iterations: 1
          });
          currentItem.style = 'display:block;';
          currentItem.removeAttribute('will-change');
        }
      }
    });
  }


}());

(function(){
  const cardsAll = document.querySelectorAll('.equipment-card');
  if (!cardsAll) { return; }

  for (let i = 0; i < cardsAll.length; i++) {
    const card = cardsAll[i];
    const moreBtn = card.querySelector('.btn--more');
    const returnBtn = card.querySelector('.btn--return');
    const flipElem = card.querySelector('.equipment-card__inner');

    const moreBtnClickHandler = function (e) {
      flipElem.classList.toggle('equipment-card__inner--backface');
    };

    if (moreBtn && returnBtn) {
      moreBtn.addEventListener('click', moreBtnClickHandler);
      returnBtn.addEventListener('click', moreBtnClickHandler);
    }
  }
}());

/*(function(){
  // Балансировка высоты колонок
  const gridElemAll = document.querySelectorAll('.grid-item');

  if (!gridElemAll) { return; }
  let elemMaxHeight = 0;
  let elemMaxWidth = 0;

  const setSize = function () {
    // Находим самый высокий элемент и балансируем высоту
    for (let i = 0; i < gridElemAll.length; i++) {
      let currentElem = gridElemAll[i];
      let currentCard = currentElem.children[0];
      let currentCardHeight = Math.ceil(currentCard.offsetHeight)

      if (elemMaxHeight < currentCardHeight) {
        elemMaxHeight = currentCardHeight;
      }
      // if (elemMaxWidth < currentCard.offsetWidth) {
      //   elemMaxWidth = Math.ceil(currentCard.offsetWidth);
      // }

      if (currentCardHeight < elemMaxHeight) {
         currentCard.style = `height: ${elemMaxHeight}px;`;
      }
      // if (currentCard.offsetWidth < elemMaxWidth) {
      //     currentCard.style = `width: ${elemMaxWidth}px;`;
      // }
    }
  };

  setSize();

  // Ресайз при изменении р-ра экрана
  let resizeTimeout;
  const resizeThrottler = function () {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        setSize();
       // The actualResizeHandler will execute at a rate of 15fps
       }, 100);
    }
  };

  window.addEventListener("resize", resizeThrottler, false);

  //задаем высоту элементам, который ниже самого высокого
  // for (let j = 0; j < gridElemAll.length; j++) {
  //   let currentElem = gridElemAll[j];
  //   let currentCard = currentElem.children[0];

  //   if (currentCard.offsetHeight < elemMaxHeight) {
  //      currentCard.style = `height: ${elemMaxHeight}px;`;
  //   }
  // }

  //console.log(`Макс высота элемента: ${elemMaxHeight}`);
  //console.log(`Макс ширина элемента: ${elemMaxWidth}`);
}());*/
