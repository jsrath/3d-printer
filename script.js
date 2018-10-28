const header = document.querySelector('header');
const menu = document.querySelector('#menu');

toggleMenu = () => {
  header.classList.toggle('isDisplayed');
};

menu.addEventListener('click', toggleMenu);
