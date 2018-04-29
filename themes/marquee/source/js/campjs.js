(function(){
  // Do CampJS stuff.
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.getElementById('navbarNav');

  function hideNav(){
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarNav.classList.remove('show');
  }

  navbarToggler.addEventListener('click', () => {
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
    if(isExpanded){
      hideNav();
    } else {
      navbarToggler.setAttribute('aria-expanded', 'true');
      navbarNav.classList.add('show');
      window.addEventListener('scroll', hideNav, { once: true });
    }
  });
})();
