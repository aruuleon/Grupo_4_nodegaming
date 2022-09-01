window.addEventListener('load', function () {
    let form = document.querySelector('form');
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let image = document.querySelector("#image");
    let p = document.getElementsByClassName('errors');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(firstname.value == ""){
            p.innerText = 'Este campo no debe estar vacio';
            console.log('El campo de nombre esta vacio');
        // } else if(lastname.value == ""){
        //     console.log('El campo de apellido esta vacio');
        // } else if(email.value == ""){
        //     console.log('El campo de mail esta vacio');
        // } else if(password.value == ""){
        //     console.log('El campo de contraseña esta vacio');
        // } else if(image.value == ""){
        //     console.log('El campo de imagen esta vacio');
        // }
}})
})