const { db } = require('../db');
const _ = require('lodash');
// TODO use lodash

function getUsers() {
  return db.getData('/users');
}

function getUser(userId) {
  const user = _.find(db.getData('/users'), { id: Number(userId) });
  return {
    ...user,
    tweets: _.filter(db.getData('/tweets'), { authorId: Number(user.id) }),
  };
}

function createUser(username, displayName, location, bio) {
  if (usernameTaken(username)) throw new Error('Username taken');
  const index = db.getData('/users').length;
  const id = index + 1;
  const newUser = {
    id,
    username: `@${username}`,
    displayName,
    location,
    bio,
  };
  db.push(`/users[${index}]`, newUser);
  return getUser(id);
}

// HELPERS
function findUserByUsername(username) {
  const user = _.find(db.getData('/users'), { username: `@${username}` });
  if (user) return user;
  throw new Error('User not found');
}

function usernameTaken(username) {
  try {
    findUserByUsername(username);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
