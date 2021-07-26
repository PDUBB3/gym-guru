const { gql } = require("apollo-server");

const typeDefs = gql`
  type Facility {
    id: ID!
    name: String!
  }

  type Query {
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
  }
`;

module.exports = typeDefs;
