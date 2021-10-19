const { User } = require('../models');

const userData = [{
        username: 'fishFriend',
        password: 'nemo'

    },
    {
        username: 'dogsRule',
        password: 'pug'
    },
    {
        username: 'catAttack',
        password: 'whiskers'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;