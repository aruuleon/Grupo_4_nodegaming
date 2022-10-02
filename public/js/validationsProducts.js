const form = document.querySelector('#form')
const inputs = document.querySelectorAll('#form input')
const selects = document.querySelectorAll('#form select')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     if(campos.name && campos.price && campos.discount && campos.stock && campos.image_primary && campos.image_secondary && campos.image_tertiary && campos.category_id && campos.brand_id){
//         form.submit()
//     } else {
//         document.getElementById('mensaje___error').classList.add('formulario__input-error-activo')
//     }
// })

const expresiones = {
    name: /.{5,}/,
    description1: /.{20,}/,
    price: /[\d\.\,\-]/,
    stock: /\d/,
    discount: /\d/
}
const campos = {
    name: false,
    price: false,
    discount: false,
    stock: false,
    image_primary: false,
    image_secondary: false,
    image_tertiary: false,
    category_id: false,
    brand_id: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name')
            break;
        case "description":
            validarDescription(e.target, 'description')
            break;
        case "price":
            validarNumeros(expresiones.price, e.target, 'price')
            break;
        case "discount":
            validarDiscount(expresiones.discount, e.target, 'discount')
            break;
        case "stock":
            validarCampo(expresiones.stock, e.target, 'stock')
            break;
        case "image_primary":
            validarImagen(e.target, "image_primary")
            break;
        case "image_secondary":
            validarImagen(e.target, "image_secondary")
            break;
        case "image_tertiary":
            validarImagen(e.target, "image_tertiary")
            break;
        case "brand_id":
            validarSelect(e.target, "brand_id")
            break;
        case "category_id":
            validarSelect(e.target, "category_id")
            break;
    }
}


const validarSelect = (select, campo) => {
    if(select.value == "-" || select.value == ''){
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
    }else {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }
}

const validarNumeros = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        if (input.value < 0) {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
        } else {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        }
    }
}
const validarDescription = (input, campo) => {
    if (input.value.length < 1 || input.value.length > 19) {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}
const validarDiscount = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        if (input.value <= 99) {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
        }
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}
const validarImagen = (input, campo) => {
    let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
    let extension = input.value.substring(input.value.lastIndexOf(".")).toLowerCase();
    let permiso = false;
    if (!input.files[0]) {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
    } else {
        for (let i = 0; i < acceptedExtensions.length; i++)
            if (acceptedExtensions[i] == extension) {
                permiso = true;
                document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
                campos[campo] = true;
            }
    }
    if (!permiso) {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.add('formulario__input-error-activo');
    } else {
        document.querySelector(`#${campo}_group .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }

}


inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('mouseOut', validarFormulario);
});

selects.forEach((select) => {
    select.addEventListener('blur', validarFormulario);
    select.addEventListener('keyup', validarFormulario)
    select.addEventListener('mouseOut', validarFormulario);
});


