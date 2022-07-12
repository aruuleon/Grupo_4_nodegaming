const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/users'));
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

const usersController = require('../controllers/users');

/*** USER LOGIN ***/ 
router.get('/login', usersController.login);
router.post('/login', usersController.procesoLogin);

/*** GET ALL USERS ***/ 
router.get('/users', usersController.index);

/*** DETAIL ONE USER ***/
router.get('/detail/:id', usersController.detail);

/*** REGISTER ONE USER ***/ 
router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'), usersController.store);

/*** EDIT ONE USER ***/ 
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.update);

/*** DELETE ONE USER ***/ 
router.delete('/:id', usersController.delete); 

module.exports = router;