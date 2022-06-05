const {
  getTweets,
  getTweet,
  getTweetsByUser,
  addTweet,
} = require('../actions/tweets');
const { getUsers, getUser } = require('../actions/users');
const { login } = require('../actions/sessions');

const resolvers = {
  Query: {
    // Tweets
    tweets: () => getTweets(),
    tweetsByUser: (parent, args) => getTweetsByUser(args.id),
    tweet: (parent, args) => getTweet(args.id),

    // Users
    users: () => getUsers(),
    user: (parent, args) => getUser(args.id),

    // Sessions
    login: (parent, args) => login(args.username),
  },

  Mutation: {
    createTweet: (parent, args) => addTweet(args.text, args.authorId),
  },
};

module.exports = { resolvers };
