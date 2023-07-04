const burgerButton = document.querySelector('.header_burger-menu');
const burgerMenu = document.querySelector('.burger_main-block');
const closeBtn = document.querySelector('.close-btn');

burgerButton.addEventListener('mouseup', e => {
    e.preventDefault();
    burgerMenu.style.display = 'block';
});

closeBtn.addEventListener('mouseup', e => {
    e.preventDefault();
    burgerMenu.style.display = 'none';
})