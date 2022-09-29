const db = require('../../database/models');

const Users = db.user;

const controller = {
    list: function (req, res) {
        Users.findAll()
            .then(function (users) {

                let usersDetail = users.map(u => (
                    {
                        id: u.id,
                        name: `${u.firstname} ${u.lastname}`,
                        email: u.email,
                        detail: `http://localhost:3000/api/users/detail/${u.id}`
                    }
                ))

                res.status(200).json({
                    count: users.length,
                    users: usersDetail,
                })
            })
    },
    detail: function (req, res) {
        Users.findByPk(req.params.id)
            .then(function (user) {
                const url = '/img/users/';

                let userDetail = {
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    phone: user.phone,
                    avatar: user.avatar,
                    image: `${url}${user.avatar}`
                }

                return res.status(200).json(userDetail)
            })
    },
}

module.exports = controller;