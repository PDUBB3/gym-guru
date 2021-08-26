const gyms = require("./gyms");
const { gym, updateGymRating } = require("./gym");
const createGym = require("./createGym");
const updateGym = require("./updateGym");
const deleteGym = require("./deleteGym");
const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const users = require("./users");
const findUser = require("./findUser");
const { updateUser, updateAttendingGym } = require("./updateUser");
const login = require("./login");
const signUp = require("./signUp");
const { reviews, addReview } = require("./reviews");
const {
  buddyRequests,
  acceptBuddyRequest,
  rejectBuddyRequest,
  getBuddies,
} = require("./buddyRequests");

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
    updateUser,
    updateAttendingGym,
    deleteGym,
  },
};

module.exports = resolvers;
