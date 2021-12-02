const { gql } = require('apollo-server-express');
const {
  checkoutInput,
  checkoutType,
} = require('./modules/checkout/checkout.graphql');
const { ringType, ringInput } = require('./modules/ring/ring.graphql');

const typeDefs = gql`
  ${ringType}
  ${ringInput}
  ${checkoutInput}
  ${checkoutType}
  type PaginatedRings {
    items: [Ring!]!
    count: Int!
  }
  type PaginatedCheckouts {
    items: [Checkout!]!
    count: Int!
  }
  type Query {
    getAllRings(limit: Int!): PaginatedRings
    getRingById(id: ID!): Ring
    getAllCheckouts: PaginatedCheckouts
  }
  type Mutation {
    addRing(ring: RingInput!): Ring
    addCheckout(checkout: CheckoutInput!): Checkout
  }
`;

module.exports = typeDefs;
