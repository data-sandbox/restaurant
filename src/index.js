import initializePage from './initialize';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function addNavEvents() {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const aboutBtn = document.getElementById('about');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  aboutBtn.addEventListener('click', loadAbout);
};

initializePage();
addNavEvents();
loadHome();