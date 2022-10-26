const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: int
    savedBooks: [Book]
  }

  type Books {
    bookId: ID!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input bookParams {
    bookId: ID!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: Sring!): Auth
    saveBook(bookData: bookParams!): User
    removeBook:(bookId: ID!): User
  }
`;
