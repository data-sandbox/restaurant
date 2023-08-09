function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  for (let i = 0; i < 6; i++) {
    menu.appendChild(createMenuItem('Item 1', 'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.', '$10'));
  }

  return menu;
}

function createMenuItem(name, description, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const line = document.createElement('hr');

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodPrice = document.createElement('p');
  foodPrice.textContent = price;

  menuItem.appendChild(foodName);
  menuItem.appendChild(line);
  menuItem.appendChild(foodDescription);
  menuItem.appendChild(foodPrice);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
