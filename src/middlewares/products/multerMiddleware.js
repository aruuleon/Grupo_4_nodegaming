const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'));
    },
    filename : (req, file, cb) => {
        let date = Date.now();
        let random = Math.round(Math.random() * 1E9);
        let extname = path.extname(file.originalname);
        const newFileName = `img-${date}${random}${extname}`;
        cb(null, newFileName);
    },
});

const upload = multer({ storage });

module.exports = upload;