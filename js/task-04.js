const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const valueEl = document.querySelector('#value');


decrementBtn.addEventListener('click', () => {
    counterValue --;
    valueEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue ++;
    valueEl.textContent = counterValue;
})