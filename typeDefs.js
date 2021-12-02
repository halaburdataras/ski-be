const { gql } = require('apollo-server-express');
const {
  checkoutInput,
  checkoutType,
} = require('./modules/checkout/checkout.graphql');
const {
  promotionType,
  promotionInput,
} = require('./modules/promotion/promotion.graphql');
const { ringType, ringInput } = require('./modules/ring/ring.graphql');

const typeDefs = gql`
  ${ringType}
  ${ringInput}
  ${checkoutInput}
  ${checkoutType}
  ${promotionType}
  ${promotionInput}
  type PaginatedRings {
    items: [Ring!]!
    count: Int!
  }
  type PaginatedCheckouts {
    items: [Checkout!]!
    count: Int!
  }
  type PaginatedPromotions {
    items: [Promotion!]!
    count: Int!
  }
  type Query {
    getAllRings(limit: Int!): PaginatedRings
    getRingById(id: ID!): Ring
    getAllCheckouts: PaginatedCheckouts
    getAllPromotions: PaginatedPromotions
  }
  type Mutation {
    addRing(ring: RingInput!): Ring
    addCheckout(checkout: CheckoutInput!): Checkout
    addPromotion(promotion: PromotionInput!): Promotion
  }
`;

module.exports = typeDefs;
