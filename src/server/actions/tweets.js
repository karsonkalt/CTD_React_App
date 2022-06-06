const { db } = require('../db');
const _ = require('lodash');

// TODO use lodash
function getTweets() {
  const tweets = db.getData('/tweets');
  const users = db.getData('/users');
  return tweets.map((tweet) => {
    const { authorId, ...rest } = tweet;
    return {
      ...rest,
      author: users.find((user) => user.id === tweet.authorId),
    };
  });
}

function getTweet(tweetId) {
  const { authorId, ...rest } = db
    .getData('/tweets')
    .find((tweet) => String(tweet.id) === String(tweetId));
  return {
    ...rest,
    author: db
      .getData('/users')
      .find((user) => String(user.id) === String(authorId)),
  };
}

function getTweetsByUser(userId) {
  return getTweets().filter(
    (tweet) => String(tweet.author.id) === String(userId)
  );
}

function addTweet(text, authorId) {
  const index = db.getData('/tweets').length;
  const id = index + 1;
  const newTweet = {
    id,
    text,
    createdAt: new Date().toISOString(),
    promoted: false,
    authorId,
  };
  db.push(`/tweets[${index}]`, newTweet);
  return getTweet(id);
}

module.exports = {
  getTweets,
  getTweet,
  getTweetsByUser,
  addTweet,
};
