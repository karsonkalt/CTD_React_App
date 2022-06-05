const { db } = require('../db');

function getUsers() {
  return db.getData('/users');
}

function getUser(userId) {
  const user = db
    .getData('/users')
    .find((tweet) => String(tweet.id) === String(userId));
  return {
    ...user,
    tweets: db
      .getData('/tweets')
      .filter((tweet) => String(tweet.authorId) === String(userId)),
  };
}

module.exports = {
  getUsers,
  getUser,
};
