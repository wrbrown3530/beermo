document.addEventListener("DOMContentLoaded", function(){
  let loginForm = document.getElementById("login-form")


  loginForm.addEventListener('submit', event=>{
    event.preventDefault()

    let password = document.getElementById("password-input").value
    let email = document.getElementById("email").value

    let user ={}
    user.email = email
    user.password = password
    login(user)
      .then(data=>{
        
      })
  }

  })