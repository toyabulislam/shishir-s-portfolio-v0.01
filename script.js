let MenuBar = document.querySelector('.menu-bar');
let SideMenu = document.querySelector('.side-menu');
let x = document.querySelector('.fa-times');

MenuBar.addEventListener('click', function(){
       SideMenu.classList.add('open');
});

x.addEventListener('click', function(){
       SideMenu.classList.remove('open');
});

$ (document).ready (function(){ $ ('.slider').slick({
       arrows: false,
       dots: true,
       appendDots: '.slider-dots',
       dotsClass: 'dots',
})});

