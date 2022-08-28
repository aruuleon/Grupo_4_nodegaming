const path = require('path');

const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tenes que indicar un nombre'),
    body('brand_id').notEmpty().withMessage('Tenes que indicar una marca'),
    body('category_id').notEmpty().withMessage('Tenes que indicar una categoría'),
    body('description').notEmpty().withMessage('Tenes que indicar una descripción'),
    body('price').notEmpty().withMessage('Tenes que indicar un precio'),
    body('discount').notEmpty().withMessage('Tenes que indicar un descuento'),
    body('stock').notEmpty().withMessage('Tenes que indicar un stock'),

    body(['image_primary', 'image_secondary', 'image_tertiary']).custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg'];

        if (!file) {
            throw new Error('Tenes que subir una imagen');
        } else {
            let extname =  path.extname(file.originalname);
            if (!acceptedExtensions.includes(extname)) {
                throw new Error('Las extenciones de archivo permitidas son ' + acceptedExtensions.join(', '));
            }
        }
        return true;
    }),
];