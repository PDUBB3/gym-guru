const { Gym } = require("../models");

const gym = async (_, { id }) => {
  const gymsFromDb = await Gym.findById(id)
    .populate("exerciseFacilities")
    .populate("otherFacilities");
  return gymsFromDb;
};

module.exports = gym;
