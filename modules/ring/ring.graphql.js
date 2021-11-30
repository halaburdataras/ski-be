const ringType = `
    type Ring {
        id: ID
        name: String
        description: String
        price: Int
        photo: String
    }`;

const ringInput = `
    input RingInput{
        id: ID
        name: String!
        description: String!
        price: Int!
        photo: String!
    }
`;

module.exports = {
  ringType,
  ringInput,
};
