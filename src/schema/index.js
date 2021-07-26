const { gql } = require("apollo-server");

const typeDefs = gql`
  type Facility {
    id: ID!
    name: String!
  }

  type Gym {
    id: ID!
    name: String!
    address: String!
    city: String!
    postCode: String!
    contactNumber: String!
    rating: Float!
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
  }

  type Query {
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
    gyms(city: String, sortBy: String): [Gym]
    gym(id: ID!): Gym
  }
`;

module.exports = typeDefs;
