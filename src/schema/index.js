const { gql } = require("apollo-server");

const typeDefs = gql`
  type Facility {
    id: ID!
    name: String!
  }

  type OpeningTime {
    dayIndex: Int!
    dayName: String!
    dayShort: String!
    startTime: String!
    endTime: String!
  }

  type Gym {
    id: ID!
    name: String!
    imageURL: String
    address: String!
    city: String!
    postCode: String!
    contactNumber: String!
    openingTimes: [OpeningTime]
    rating: Float
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
  }

  type Buddy {
    id: ID!
    requesterId: detailedUser!
    recipientId: detailedUser!
    status: BuddyStatus
  }

  enum BuddyStatus {
    REQUESTED
    PENDING
    BUDDIES
  }

  type Categories {
    category: String
    rating: Float
  }

  type Review {
    id: ID!
    categories: [Categories]
    comment: String
  }

  type Query {
    exerciseFacilities: [Facility]
    otherFacilities: [Facility]
    gyms(
      city: String
      sortBy: String
      exerciseFacilities: [ID]
      otherFacilities: [ID]
    ): [Gym]
    gym(id: ID!): Gym
    findUser(username: String): detailedUser
    users(city: String): [detailedUser]
    getBuddies(requesterId: ID, recipientId: ID, status: BuddyStatus): [Buddy]
    reviews(gymId: ID!): [Review]
  }

  input CreateGymInput {
    name: String!
    imageURL: String
    address: String!
    city: String!
    postCode: String!
    contactNumber: String!
    openingTimes: [OpeningTimeInput]
    rating: Float
    exerciseFacilities: [ID]
    otherFacilities: [ID]
  }

  type detailedUser {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
    isGymOwner: Boolean
    ownedGymId: ID
    attendingGymId: Gym
    profileImageUrl: String
    city: String!
    bio: String!
    goals: [String]
    interests: [String]
    facebookUrl: String
    twitterUrl: String
    instagramUrl: String
    buddies: [ID]
  }

  type User {
    id: ID!
    email: String!
    username: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    profileImageUrl: String
    city: String!
    bio: String!
    goals: [String]
    interests: [String]
    facebookUrl: String
    twitterUrl: String
    instagramUrl: String
    isGymOwner: Boolean
  }

  input OpeningTimeInput {
    dayIndex: Int!
    dayName: String!
    dayShort: String!
    startTime: String!
    endTime: String!
  }

  input BuddyInput {
    requesterId: ID
    recipientId: ID
  }

  input ReviewInput {
    gymId: ID!
    categories: [CategoriesInput]
    comment: String
  }

  input CategoriesInput {
    category: String
    rating: Float
  }

  type Mutation {
    login(input: LoginInput): Auth
    signUp(input: SignUpInput): Auth!
    createGym(input: CreateGymInput!): Gym!
    buddyRequests(input: BuddyInput): Buddy
    acceptBuddyRequest(input: BuddyInput): Buddy
    rejectBuddyRequest(input: BuddyInput): Buddy
    addReview(input: ReviewInput): Review
  }
`;

module.exports = typeDefs;
