const buttonCollapse = document.querySelector('.header button.btn-collapse');
const buttonClose = document.querySelector('.nav .btn-close');

/**
 * select the navbar and toggle the visibility of the navigation bar;
 * 
 */
const onButtonClick = () => {
    const nav = document.querySelector('.header .nav');
    const navClassToShow = 'nav-show';
    nav.classList.toggle(navClassToShow);
}

buttonCollapse.addEventListener('click', onButtonClick);

buttonClose.addEventListener('click', onButtonClick);