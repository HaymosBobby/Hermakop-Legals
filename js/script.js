// Show hidden bars

(() => {
  const showMobileNav = () => {
    document.querySelector('#mobile_toggler').classList.toggle('fa-times')
    document.querySelector('.mobile_navigations').classList.toggle('active');
    console.log('toggler clicked');

  }
  
  const showPub = (e) => {
    // e.preventDefault();
  
    document.querySelector('.practice_areas').classList.toggle('show_pa');
   }
  
  
  
  document.querySelector('#mobile_toggler').addEventListener('click', showMobileNav);
  document.querySelector('.link').addEventListener('click', showPub);
})();

window.onscroll = () => {
  document.querySelector('#mobile_toggler').classList.remove('fa-times')
  document.querySelector('.mobile_navigations').classList.remove('active');
  document.querySelector('.practice_areas').classList.remove('show_pa');
}

// Smooth scroll

$('#navbar a, #showcase a, .scroll_top').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      },800
    );
  }
}); 

// Sticky navbar background
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})
