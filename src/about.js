function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about');

  const heading = document.createElement('h1');
  heading.textContent = 'Something for Everyone';

  const line = document.createElement('hr');

  const text = document.createElement('p');
  text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
  est laborum.`

  const elements = [heading, line, text];

  elements.forEach(element => about.appendChild(element));

  return about;
}

function loadAbout() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createAbout());
}

export default loadAbout;