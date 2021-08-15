const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const gyms = require("./gyms");
const gym = require("./gym");
const findUser = require("./findUser");

const login = require("./login");
const signUp = require("./signUp");
const createGym = require("./createGym");

const resolvers = {
  Query: {
    exerciseFacilities,
    otherFacilities,
    gyms,
    gym,
    findUser,
  },
  Mutation: {
    createGym,
    login,
    signUp,
  },
};

module.exports = resolvers;
