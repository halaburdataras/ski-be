const { gql } = require('apollo-server-express');
const { ringType, ringInput } = require('./modules/ring/ring.graphql');

const typeDefs = gql`
  ${ringType}
  ${ringInput}
  type PaginatedRings {
    items: [Ring!]!
    count: Int!
  }
  type Query {
    getAllRings(limit: Int!): PaginatedRings
    getRingById(id: ID!): Ring
  }
  type Mutation {
    addRing(ring: RingInput!): Ring
  }
`;

module.exports = typeDefs;
