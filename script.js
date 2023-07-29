$(function(){
    $('#product').owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 500,
        nav: true,
        navText:[],
        dots:true,
        dotsText:[]
    })
})
// nav 
let toggles = document.querySelectorAll('.nav-toggle');
let menu = document.querySelector('.menu-group');

for (toggle of toggles) {
    toggle.onclick = e => {
        menu.classList.toggle('active');
        if (menu.style.height) {
            menu.style.height = '';
        } else {
            menu.style.height = menu.scrollHeight + 'px';
        }
    };
}

// window.onresize = e => {
//     let windowWidth = window.innerWidth;
//     let menu = document.querySelector('.menu-group');
//     if (windowWidth > 720) {
//         menu.style.height = 'initial';
//         menu.style.overflow = 'initial';
//     } else {
//         menu.style.height = menu.scrollHeight + 'px';
//         menu.style.overflow = 'hidden';
//     }
// }