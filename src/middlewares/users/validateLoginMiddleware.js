const { body } = require('express-validator');

module.exports = [
    body('email').notEmpty().withMessage('Tenes que escribir un email').bail().isEmail().withMessage('Tenes que escribir un formato de email válido'),
    body('password').notEmpty().withMessage('Tenes que escribir una contraseña'),
];