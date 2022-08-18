const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

const upload = require('../middlewares/users/multerMiddleware');
const validationsRegister = require('../middlewares/users/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/users/validateLoginMiddleware');
const guestMiddleware = require('../middlewares/users/guestMiddleware');
const authMiddleware = require('../middlewares/users/authMiddleware');

/*** REGISTER ONE USER ***/ 
router.get('/register', guestMiddleware,usersController.register);
router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);

/*** USER LOGIN ***/ 
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validationsLogin,usersController.processLogin);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);

/*** GET ALL USERS ***/ 
router.get('/users', usersController.index);

/*** USER PROFILE ***/
router.get('/profile', guestMiddleware, usersController.profile);

/*** EDIT ONE USER ***/ 
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', validationsRegister, usersController.update);

/*** DELETE ONE USER ***/ 
router.delete('/:id', usersController.delete); 

module.exports = router;