const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'Lebronjames',
        email: 'thegoat@gmail.com',
        password: 'password1'
    },
    {
        username: 'Kanyewest',
        email: 'yeezymafia@yahoo.com',
        password: 'password2'
    },
    {
        username: 'Drizzydrake',
        email: 'sixgodrealtalk@gmail.com',
        password: 'password3'
    },
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = userSeeds;