const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const gyms = require("./gyms");
const { gym, updateGymRating } = require("./gym");
const updateGym = require("./updateGym");
const findUser = require("./findUser");
const users = require("./users");
const {
  buddyRequests,
  acceptBuddyRequest,
  rejectBuddyRequest,
  getBuddies,
} = require("./buddyRequests");
const login = require("./login");
const signUp = require("./signUp");
const createGym = require("./createGym");
const { reviews, addReview } = require("./reviews");

const resolvers = {
  BuddyStatus: {
    REQUESTED: 1,
    PENDING: 2,
    BUDDIES: 3,
  },

  Query: {
    exerciseFacilities,
    otherFacilities,
    gyms,
    gym,
    findUser,
    users,
    getBuddies,
    reviews,
  },
  Mutation: {
    createGym,
    login,
    signUp,
    buddyRequests,
    acceptBuddyRequest,
    rejectBuddyRequest,
    addReview,
    updateGymRating,
    updateGym,
  },
};

module.exports = resolvers;
