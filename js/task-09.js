const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const body = document.querySelector('body')



btnEl.addEventListener('click', onCick)


function onCick() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}