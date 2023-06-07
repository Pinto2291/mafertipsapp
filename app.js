$(document).ready(function(){

    $('.hero-slider').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    });

});

function openNav() {
  document.querySelector('.sidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}