(function (){
  const mainNav = document.getElementById('main-nav');
  const menuItemArr = mainNav.querySelectorAll('.main-nav__list>.main-nav__item');
  const activeClass = 'active';
  const linkArrowClass = 'main-nav__link--arrow';

  for (let i = 0; i < menuItemArr.length; i++) {
    let currentItem = menuItemArr[i];
    let currentItemFirstChild = currentItem.firstChild.nextSibling;
    if ( currentItem.classList.contains(activeClass) && currentItemFirstChild.classList.contains(linkArrowClass) ) {
      mainNav.classList.add('main-nav--bot-margin');
    }
  }
})()
