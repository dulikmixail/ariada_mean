const mongoose = require('mongoose');
const id = mongoose.mongo.ObjectId;
module.exports = [
  {
    user : {
      _id: id('5c3884966f236419447d5e60'),
      login: 'user0',
      password: 'password0',
    },
    tokens: ['REFRESH_TOKEN_0']
  },
  {
    user : {
      _id: id('5c3884966f236419447d5e61'),
      login: 'user1',
      password: 'password1',
    },
    tokens: ['REFRESH_TOKEN_1']
  },
  {
    user: {
      _id: id('5c3884966f236419447d5e62'),
      login: 'user2',
      password: 'password2',
    },
    tokens: ['REFRESH_TOKEN_2', 'REFRESH_TOKEN_3']
  }
];
