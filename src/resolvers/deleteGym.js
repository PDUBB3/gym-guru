const { Gym } = require("../models");

const deleteGym = async (_, { id }) => {
  await Gym.findByIdAndDelete(id);
};

module.exports = deleteGym;
