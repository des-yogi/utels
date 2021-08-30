(function(){
  const miniCartOverlay = document.getElementById('miniCartOverlay');
  const showCartBtn = document.getElementById('showCartBtn');
  const miniCart = document.getElementById('mini-cart');
  const body = document.querySelector('body');

  if (!miniCartOverlay) { return; }

  const bodyStyleHandler = function (e) {
    if (!body.hasAttribute('style')) {
      body.style = 'overflow:hidden;'
      //console.log(true);
    } else {
      //console.log(false);
      body.removeAttribute('style');
    }
  };

  const clickOverlayHandler = function (e) {
    miniCart.classList.remove('show');
    showCartBtn.classList.add('collapsed');
    showCartBtn.setAttribute('aria-expanded', false);
    bodyStyleHandler();
  };

  miniCartOverlay.addEventListener('click', clickOverlayHandler);
  showCartBtn.addEventListener('click', bodyStyleHandler);

  document.addEventListener('keydown', function(e) {
    const key = e.key; // const {key} = event; in ES6+
    if (key === 'Escape' || e.keyCode === 27) {
      clickOverlayHandler();
      //bodyStyleHandler();
    }
  });
}());
