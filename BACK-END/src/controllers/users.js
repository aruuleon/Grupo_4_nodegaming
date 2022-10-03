const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const Users = db.user;
const { validationResult } = require('express-validator');

const controller = {
    register: function (req, res) {
        res.render('./users/register', { name: 'register', title: 'REGISTRARSE' });
    },
    processRegister: function (req, res) {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            Users.findOne({ where: { email: req.body.email } })
                .then(function (userInDB) {
                    if (userInDB) {
                        res.render('./users/register', { errors: { email: { msg: 'Este email ya se encuentra registrado' } }, old: req.body, name: 'register', title: 'REGISTRARSE' });
                    } else {
                        let userImage;
                        if (req.file) {
                            userImage = req.file.filename;
                        } else {
                            userImage = 'imgDefault.png';
                        }
                        let userToCreate = {
                            ...req.body,
                            password: bcryptjs.hashSync(req.body.password, 10),
                            avatar: userImage,
                        };
                        Users.create(userToCreate)
                            .then(function () {
                                res.redirect('/users/login');
                            })
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
            Users.findOne({ where: { email: req.body.email } })
                .then(function (userToLogin) {
                    if (userToLogin) {
                        let isCorrectThisPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                        if (isCorrectThisPassword) {
                            delete userToLogin.password;
                            req.session.userLogged = userToLogin;

                            if (req.body.remember) {
                                res.cookie('userEmail', req.body.email, { maxAge: (100000 * 60) * 60 });
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
    edit: function (req, res) {
        res.render('./users/edit', { user: req.session.userLogged, name: 'generalStyles', title: 'EDITAR' });
    },
    update: function (req, res) {
        Users.findByPk((req.session.userLogged).id)
            .then(function (user) {
                let userImage;

                if (req.file) {
                    userImage = req.file.filename;
                } else {
                    userImage = user.avatar;
                }

                let userToEdit = {
                    ...req.body,
                    avatar: userImage
                }

                Users.update(userToEdit, {
                    where: {
                        id: user.id
                    }
                })
                    .then(function () {
                        res.redirect('/');
                    })
            })

    },
    delete: function (req, res) {
        Users.destroy({
            where: {
                id: (req.session.userLogged).id
            }
        })
            .then(function () {
                res.clearCookie('userEmail');
                req.session.destroy();
                res.redirect('/');
            })
    },
};

module.exports = controller;