const {
  getTweets,
  getTweet,
  getTweetsByUser,
  addTweet,
} = require('../daos/tweets');
const { getUsers, getUser, createUser } = require('../daos/users');
const { login } = require('../daos/sessions');

const resolvers = {
  Query: {
    // Tweets
    tweets: () => getTweets(),
    tweetsByUser: (parent, { id }) => getTweetsByUser(id),
    tweet: (parent, { id }) => getTweet(id),

    // Users
    users: () => getUsers(),
    user: (parent, { id }) => getUser(id),

    // Sessions
    login: (parent, { username }) => login(username),
  },

  Mutation: {
    createTweet: (parent, { text, authorId }) => addTweet(text, authorId),
    createUser: (parent, { input }) =>
      createUser(input.username, input.displayName, input.location, input.bio),
  },
};

module.exports = { resolvers };
