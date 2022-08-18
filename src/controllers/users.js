const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const db = require('../database/models');
const Users = db.user;

const controller = {
    register: function (req, res) {
        res.render('./users/register', { name: 'register', title: 'REGISTRARSE' });
    },
    processRegister: function (req, res) {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (userInDB) {
                if (userInDB) {
                    res.render('./users/register', { errors: { email: { msg: 'Este email ya está registrado' } }, old: req.body, name: 'register', title: 'REGISTRARSE' });
                } else {
                    let userToCreate = {
                        ...req.body,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        avatar: req.file.filename,
                    };
                    Users.create(userToCreate);
                    res.redirect('/users/login');
                }
            })
        } else {
            res.render('./users/register', { errors: errors.mapped(), old: req.body, name: 'register', title: 'REGISTRARSE' });
        }
    },
    login: function (req, res) {
        res.render('./users/login', { name: 'login', title: 'LOGIN' });
    },
    processLogin: function (req, res) {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (userToLogin) {
                if (userToLogin) {
                    let isCorrectThisPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    if (isCorrectThisPassword) {
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;
                        if (req.body.remember) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 });
                        }
                        res.redirect('/');
                    } else {
                        res.render('./users/login', { errors: { email: { msg: 'Las credenciales son inválidas' } }, name: 'login', title: 'LOGIN' });
                    }
                } else {
                    res.render('./users/login', { errors: { email: { msg: 'No existe un usuario con este email' } }, old: req.body, name: 'login', title: 'LOGIN' });
                }
            })
        } else {
            res.render('./users/login', { errors: errors.mapped(), old: req.body, name: 'login', title: 'LOGIN' });
        }
    },
    logout: function (req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    profile: function (req, res) {
        res.render('./users/profile', { user: req.session.userLogged, name: 'profile', title: 'PERFIL' });
    },
    index: function (req, res) {
        // res.render('./users', { name: '', title: '' });
    },
    detail: function (req, res) {
        res.render('./users/login', { name: '', title: '' });
    },
    edit: function (req, res) {
        res.render('./users/login', { name: '', title: '' });
    },
    update: function (req, res) {
        // res.render('./users/register', { name: '', title : '' });
        Users.update(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                avatar: req.body.avatar,
                role_id: req.body.role_id,
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function () {
                res.status(200).json({
                    status: 200,
                    process: 'successful'
                })
            })
    },
    delete: function (req, res) {
        // res.render('./users/login', { name: '', title: '' });
    },
};

module.exports = controller;