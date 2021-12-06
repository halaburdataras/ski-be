const stuffType = `
    type Stuff {
        id: ID
        name: String
        description: String
        price: Price
        photo: String
        category: String
    }

    type Price {
            price1: Int
            price2: Int
            price3: Int
            price4: Int
            priceAdditional: Int
        }
    `;

const stuffInput = `
    input StuffInput {
        id: ID
        name: String!
        description: String!
        price: PriceInput!
        photo: String!
        category: String!
    }

    input PriceInput {
            price1: Int!
            price2: Int!
            price3: Int!
            price4: Int!
            priceAdditional: Int!
        }
`;

module.exports = {
  stuffType,
  stuffInput,
};
