const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const gyms = require("./gyms");
const gym = require("./gym");
const findUser = require("./findUser");
const users = require("./users");

const login = require("./login");
const signUp = require("./signUp");
const createGym = require("./createGym");
const reviews = require("./reviews");

const resolvers = {
  Query: {
    exerciseFacilities,
    otherFacilities,
    gyms,
    gym,
    findUser,
    users,
    reviews,
  },
  Mutation: {
    createGym,
    login,
    signUp,
  },
};

module.exports = resolvers;
