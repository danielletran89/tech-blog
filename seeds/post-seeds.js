const { Post } = require('../models');

const postData = [{
        title: 'Fish are friends, not food',
        content: 'Save the whales and sharks!',
        user_id: 1

    },
    {
        title: 'Dogs: The real BFF',
        content: 'There is nothing better than coming home to your BFF, the dog.',
        user_id: 2
    },
    {
        title: 'Cats Conquer',
        content: 'Cats will one day inherit the earth.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;