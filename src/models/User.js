const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

const User = {
    filename: usersPath,

    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        let assignedId;
        if(lastUser){
            assignedId = lastUser.id + 1;
        } else {
            assignedId = 1;
        }
        return assignedId;
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;