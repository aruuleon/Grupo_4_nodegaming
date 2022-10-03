const db = require('../../database/models');
const Users = db.user;

function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        res.redirect('/users/login');
    }

    const { id } = req.session.userLogged;
    Users.findByPk(id, {raw: true})
    .then(function (user) {
        req.session.userLogged = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            avatar: user.avatar
        }
        next();
    })
}

module.exports = authMiddleware;