let closeMenu = document.getElementById('close-menu');
let burguerMenu = document.getElementById('burguer-menu');
let mobileMenu = document.getElementById('mobile-menu');

burguerMenu.addEventListener('click',e=>{
    mobileMenu.classList.add('show');
})

closeMenu.addEventListener('click',e=>{
    mobileMenu.classList.remove('show');
})