const { gql } = require('apollo-server-express');
const { stuffType, stuffInput } = require('./modules/stuff/graphql');

const typeDefs = gql`
  ${stuffType}
  ${stuffInput}
  type PaginatedStuff {
    items: [Stuff!]!
    count: Int!
  }
  type Query {
    getAllStuff: PaginatedStuff
    getStuffById(id: ID!): Stuff
    getStuffByCategory(category: String!): PaginatedStuff
  }
  type Mutation {
    addStuff(stuff: StuffInput!): Stuff
  }
`;

module.exports = typeDefs;
