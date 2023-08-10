function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem('Double Espresso', 'Drip coffee is boring and today is special.', '$4.75'));
  menu.appendChild(createMenuItem('Latte', 'Double espresso with steamed cow or special plant-based milk.', '$6'));
  menu.appendChild(createMenuItem('Nutella Croissant', 'Because Nutella is the best thing ever.', '$5'));
  menu.appendChild(createMenuItem('Craft Beer', 'All the IPAs. Even so-called "New England" ones.', '$7'));
  menu.appendChild(createMenuItem('Chipotle Chicken Bowl', 'Full of healthy greens, vegetables, herbs, and dressings.', '$15'));
  menu.appendChild(createMenuItem('Burrito Bomb', 'Filling is actually mixed before wrapping to disperse all that deliciousness.', '$15'));

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
