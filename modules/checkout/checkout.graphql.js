const checkoutType = `
    type Checkout {
        id: ID
        fullName: String
        email: String
        phone: Int
        adress: String
        adressExtended: String
        items:[Ring]
        totalPrice:Int
    }`;

const checkoutInput = `
    input CheckoutInput{
        id: ID
        fullName: String!
        email: String!
        phone: String!
        adress: String!
        adressExtended: String!
        items:[ID]!
        totalPrice:Int!
    }
`;

module.exports = {
  checkoutType,
  checkoutInput,
};
