const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Geo {
    lat: String
    lng: String
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
    dateTime: String
  }

  type Query {
    posts: [Post]
    users: [User]
  }

  type Mutation {
    deletePost(id: Int): Boolean
  }
`;

module.exports = {typeDefs}
