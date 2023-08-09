import initializePage from './initialize';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './style.css';
import background from './images/background.jpg'

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const aboutBtn = document.getElementById('about');

  homeBtn.addEventListener('click', handleHomeClick);
  menuBtn.addEventListener('click', handleMenuClick);
  aboutBtn.addEventListener('click', handleAboutClick);
};

function handleHomeClick(e) {
  console.log(this);
  setActiveButton(this);
  loadHome();
}

function handleMenuClick(e) {
  setActiveButton(this);
  loadMenu();
}

function handleAboutClick(e) {
  setActiveButton(this);
  loadAbout();
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".btn-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

initializePage();
addNavEvents();
setActiveButton(document.querySelector('.btn-nav.home'));
loadHome();