const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
const liEl = document.createElement('li');
liEl.classList.add('item');
liEl.textContent = ingredient;
ul.append(liEl);
})