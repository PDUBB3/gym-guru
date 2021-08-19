const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const gyms = require("./gyms");
const gym = require("./gym");
const findUser = require("./findUser");
const users = require("./users");
const {
  buddyRequests,
  acceptBuddyRequest,
  rejectBuddyRequest,
} = require("./buddyRequests");
const login = require("./login");
const signUp = require("./signUp");
const createGym = require("./createGym");

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
  },
  Mutation: {
    createGym,
    login,
    signUp,
    buddyRequests,
    acceptBuddyRequest,
    rejectBuddyRequest,
  },
};

module.exports = resolvers;
