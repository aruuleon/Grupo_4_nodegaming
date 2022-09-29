window.addEventListener('load', function(){
    let form = document.querySelector('#form');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password')
    let pEmail = document.querySelector('.errorEmailLogin')
    let pPassword = document.querySelector('.errorPasswordLogin')

    let emailCorrecto 
    let passwordCorrecto

    email.addEventListener('keyup', function(e){
        let validacionEmail = email.value 
        if(!validator.isEmail(validacionEmail)){
            pEmail.innerText = 'Tiene que introducir un mail';
            pEmail.style.color = 'red';
            emailCorrecto = false
        }else {
            pEmail.innerText = '';
            emailCorrecto = true
        };
    })
    password.addEventListener('blur', function(e){
        if(password.value==''){
            pPassword.innerText = 'Tiene que introducir su contraseña'
            pPassword.style.color = 'red';
            passwordCorrecto = false
        }
        else{
            passwordCorrecto = true
        }
    })
    form.addEventListener('submit', function(e){
        // e.preventDefault();
        if (emailCorrecto == true && passwordCorrecto == true) {
            form.submit()
        } else {
            document.getElementById('mensaje___error').classList.add('formulario__input-error-activo')
        }
    });
});