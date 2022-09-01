const path = require('path');

const { body } = require('express-validator');

module.exports = [
    body('firstname').notEmpty().withMessage('Tenes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tenes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tenes que escribir un email').bail().isEmail().withMessage('Tenes que escribir un formato de email válido'),
    body('phone').notEmpty().withMessage('Tenes que escribir un número telefónico'),
    body('password').notEmpty().withMessage('Tenes que escribir una contraseña'),
    
    // body('avatar').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

    //     if (!file) {
    //         throw new Error('Tenes que subir una imagen');
    //     } else {
    //         let extname =  path.extname(file.originalname);
    //         if (!acceptedExtensions.includes(extname)) {
    //             throw new Error('Las extenciones de archivo permitidas son ' + acceptedExtensions.join(', '));
    //         }
    //     }
    //     return true;
    // }),
];