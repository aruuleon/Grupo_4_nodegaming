const path = require('path');

const { body } = require('express-validator');

module.exports = [
    body('firstname').notEmpty().withMessage('Tenes que escribir un nombre').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres'),
    body('lastname').notEmpty().withMessage('Tenes que escribir un apellido').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Tenes que escribir un email').bail().isEmail().withMessage('Tenes que escribir un formato de email válido'),
    body('phone').notEmpty().withMessage('Tenes que escribir un número telefónico').bail().isLength({min: 10}).withMessage('Debe tener al menos 10 numeros'),
    body('password').notEmpty().withMessage('Tenes que escribir una contraseña').bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Debe tener al menos 8 caracteres ,1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial'),
    
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

        if (file) {
            let extname =  path.extname(file.originalname);
            if (!acceptedExtensions.includes(extname)) {
                throw new Error('Las extenciones de archivo permitidas son ' + acceptedExtensions.join(', '));
            }
        }
        return true;
    }),
];