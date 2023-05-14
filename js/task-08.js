const formEl = document.querySelector('.login-form')
const emailInput = formEl.elements.email;
const passwordInput = formEl.elements.password;



formEl.addEventListener("submit", onForm)



function onForm (event){
    event.preventDefault()
    const {email, password} = event.currentTarget.elements;

  if(!emailInput.value || !passwordInput.value){
    alert(`Fields are empty`)
    return
  } else {
    const dataUser = {
      email: email.value,
      password:password.value,
  }
  console.log(dataUser)
  }

 formEl.reset()
}
