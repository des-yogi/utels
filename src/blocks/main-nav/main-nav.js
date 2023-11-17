/*(function (){
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
})()*/

(function (){
  let new_scroll_position = 0;
  let last_scroll_position;
  const header = document.getElementById('header');
  const scrollHandler = function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      // header.removeClass('slideDown').addClass('slideUp');
      header.classList.remove('page-header--slideDown');
      header.classList.add('page-header--slideUp');

    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      // header.removeClass('slideUp').addClass('slideDown');
      header.classList.remove('page-header--slideUp');
      header.classList.add('page-header--slideDown');
    }

    new_scroll_position = last_scroll_position;
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
})()
