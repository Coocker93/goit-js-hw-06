const sizeControlInput = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

sizeControlInput.addEventListener("input", onInput);

function onInput() {
  spanElement.style.fontSize = `${sizeControlInput.value}px`;
}