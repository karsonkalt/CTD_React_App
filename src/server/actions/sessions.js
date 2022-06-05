const { db } = require('../db');

function login(username) {
  const user = db
    .getData('/users')
    .find((user) => user.username === `@${username}`);
  if (user) return user;
  throw new Error('User not found');
}

module.exports = {
  login,
};
