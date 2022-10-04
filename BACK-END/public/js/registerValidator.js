window.addEventListener('load', function () {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');

    const expresiones = {
        firstname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        lastname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{10}$/,
        password: /^.{8,12}$/
    }

    const campos = {
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        password: false
    }

    function validarFormulario(e) {
        switch (e.target.name) {
            case 'firstname':
                validarCampo(expresiones.firstname, e.target, e.target.name);
                break;
            case 'lastname':
                validarCampo(expresiones.lastname, e.target, e.target.name);
                break;
            case 'email':
                validarCampo(expresiones.email, e.target, e.target.name);
                break;
            case 'phone':
                validarCampo(expresiones.phone, e.target, e.target.name);
                break;
            case 'password':
                validarCampo(expresiones.password, e.target, e.target.name);
                break;
            case "avatar":
                validarImagen(e.target, "avatar")
                break;
        }
    }

    function validarCampo(expresion, input, campo) {
        if (expresion.test(input.value)) {
            document.querySelector(`#container-${campo} .none`).classList.remove('block');
            campos[campo] = true;
        } else {
            document.querySelector(`#container-${campo} .none`).classList.add('block');
            campos[campo] = false;
        }
    }

    const validarImagen = (input, campo) => {
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
        let extension = input.value.substring(input.value.lastIndexOf(".")).toLowerCase();
        let permiso = false;
            for (let i = 0; i < acceptedExtensions.length; i++)
                if (acceptedExtensions[i] == extension) {
                    permiso = true;
                    document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
                    campos[campo] = true;
                }
        if (!permiso) {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
        } else {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        }
    
    }

    inputs.forEach(input => {
        input.addEventListener('keyup', validarFormulario)
        input.addEventListener('blur', validarFormulario)
    });

    form.addEventListener('submit', function (e) {
        // e.preventDefault();

        if (campos.firstname && campos.lastname && campos.email && campos.phone && campos.password) {
            form.submit();
        }
    })
})