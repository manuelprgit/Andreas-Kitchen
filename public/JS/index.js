let closeMenu = document.getElementById('close-menu');
let burguerMenu = document.getElementById('burguer-menu');
let mobileMenu = document.getElementById('mobile-menu');
let productoPrueba = document.getElementById('product-1');
let productContainer = document.getElementById('productContainer');
let closeProductDetail = document.getElementById('closeProductDetail');


burguerMenu.addEventListener('click',e=>{
    mobileMenu.classList.add('show');
})

closeMenu.addEventListener('click',e=>{
    mobileMenu.classList.remove('show');
})

productoPrueba.addEventListener('click',e=>{
    productContainer.classList.add('show');
})  

closeProductDetail.addEventListener('click',e=>{
    productContainer.classList.remove('show');
})