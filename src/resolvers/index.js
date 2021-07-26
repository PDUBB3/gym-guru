const exerciseFacilities = require("./exerciseFacilities");
const otherFacilities = require("./otherFacilities");

const resolvers = {
  Query: {
    exerciseFacilities,
    otherFacilities,
  },
};

module.exports = resolvers;
