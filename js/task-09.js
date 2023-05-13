const block = document.querySelector('.widget');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');



block.addEventListener('click', onCick)


function onCick() {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}