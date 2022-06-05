const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tweet {
    id: ID!
    text: String!
    createdAt: String!
    author: User!
    promoted: Boolean
  }

  type User {
    id: ID!
    username: String!
    displayName: String!
    bio: String
    tweets: [Tweet]
    location: Location
  }

  enum Location {
    EU
    US
    ASIA
  }

  # Queries
  type Query {
    tweets: [Tweet!]!
    tweetsByUser(id: ID!): [Tweet!]!
    tweet(id: ID!): Tweet
    users: [User!]!
    user(id: ID!): User
    login(username: String!): User
  }

  # Mutations
  type Mutation {
    createTweet(text: String!, authorId: ID!): Tweet!
  }
`;

module.exports = { typeDefs };
