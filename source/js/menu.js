  var toggleButton = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');
  var siteNavigation = document.querySelector('.site-list');
  var userNavigation = document.querySelector('.user-list');

  if (mainNav && mainNav.classList.contains('main-nav--no-js')) {
    mainNav.classList.remove('main-nav--no-js');

    if (siteNavigation && userNavigation) {
      siteNavigation.classList.add('site-list--closed');
      userNavigation.classList.add('user-list--closed');
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      siteNavigation.classList.toggle('site-list--closed');
      userNavigation.classList.toggle('user-list--closed');
      this.classList.toggle('main-nav__toggle--off');
    });
  }
