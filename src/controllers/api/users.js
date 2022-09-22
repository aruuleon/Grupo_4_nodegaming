const db = require('../../database/models');

const Users = db.user;

const controller = {
    list: function (req, res) {
        Users.findAll()
    },
    detail: function (req, res) {
        
    },
}

module.exports = controller;