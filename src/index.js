import initializePage from './initialize';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import setActiveButton from './setActive';
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

initializePage();
addNavEvents();
setActiveButton(document.querySelector('.btn-nav.home'));
loadHome();
