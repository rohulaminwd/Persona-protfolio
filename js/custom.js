// btn toggle
let menu = document.querySelector('#menu-btn');
let heder = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    heder.classList.toggle('active');
}

// them toggle
let themToggle = document.querySelector('#them-toggler');

themToggle.onclick = () =>{
    themToggle.classList.toggle('fa-sun');
    if(themToggle.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}
$(document).ready(function(){
// writing
var typed = new Typed('.element', {
    strings: [
        'Rohul Amin..😎',
        'Web Desiner..😎',
        'UX/UI Desiner..😎',
        'Grapics Desiner..😎',],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
  });
//   counter up
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});