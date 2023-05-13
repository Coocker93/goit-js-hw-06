const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


inputEl.addEventListener('input', onInput)


function onInput (event) {
    const spanName = event.currentTarget.value;
    output.textContent = spanName ? spanName : `Anonymous`;

}