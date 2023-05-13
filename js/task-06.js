const inputEl = document.querySelector('#validation-input');
const inputLength = parseInt(document.querySelector('[data-length="6"]').dataset.length);


inputEl.addEventListener('blur', onInput)


function onInput(event){
let newValue = event.currentTarget.value;
if (newValue.length === inputLength){
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
} else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
}

}