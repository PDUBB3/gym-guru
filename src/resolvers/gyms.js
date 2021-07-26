const { Gym } = require("../models");

const gyms = async () => {
  const gymsFromDb = await Gym.find({})
    .populate("exerciseFacilities")
    .populate("otherFacilities");
  return gymsFromDb;
};

module.exports = gyms;
