const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

/*** USER LOGIN ***/ 
router.get('/login', usersController.login);

/*** GET ALL USERS ***/ 
router.get('/users', usersController.index);

/*** DETAIL ONE USER ***/
router.get('/detail/:id', usersController.detail);

/*** REGISTER ONE USER ***/ 
router.get('/register', usersController.register);
router.post('/register', usersController.store);

/*** EDIT ONE USER ***/ 
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.update);

/*** DELETE ONE USER ***/ 
router.delete('/:id', usersController.delete); 

module.exports = router;