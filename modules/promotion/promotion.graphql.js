const promotionType = `
    type Promotion {
        id: ID
        item: Ring
        promImage: String
    }`;

const promotionInput = `
    input PromotionInput{
        id: ID
        item: ID!
        promImage: String!
    }
`;

module.exports = {
  promotionType,
  promotionInput,
};
