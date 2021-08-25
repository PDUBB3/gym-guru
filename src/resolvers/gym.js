const { Gym } = require("../models");

const gym = async (_, { id }) => {
  return await Gym.findById(id)
    .populate("exerciseFacilities")
    .populate("otherFacilities");
};

const updateGymRating = async (_, { input }) => {
  const { id, rating } = input;
  return await Gym.findByIdAndUpdate(id, { rating: rating });
};

module.exports = { gym, updateGymRating };
