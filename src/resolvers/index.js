const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");
const gyms = require("./gyms");
const gym = require("./gym");

const createGym = require("./createGym");

const resolvers = {
  Query: {
    exerciseFacilities,
    otherFacilities,
    gyms,
    gym,
  },
  Mutation: {
    createGym,
  },
};

module.exports = resolvers;
