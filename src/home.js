import loadMenu from './menu';
import setActiveButton from './setActive';

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const name1 = document.createElement('p');
  name1.textContent = 'bespoke';
  name1.classList.add('name-one');
  const name2 = document.createElement('p');
  name2.textContent = 'CAFE';
  name2.classList.add('name-two');

  const line = document.createElement('hr');

  const headline = document.createElement('p');
  headline.classList.add('headline');
  headline.textContent = 'Espresso, craft beer, and delicious food made from scratch.';

  const btn = document.createElement('button');
  btn.classList.add('btn-menu');
  btn.textContent = 'Menu';
  btn.addEventListener('click', (e) => {
    const menuBtn = document.getElementById('menu');
    setActiveButton(menuBtn);
    loadMenu();
  });

  const elements = [name1, name2, line, headline, btn];

  elements.forEach((element) => home.appendChild(element));

  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;