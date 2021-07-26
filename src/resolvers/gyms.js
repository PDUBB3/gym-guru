const { Gym } = require("../models");

const gyms = async (_, { city, sortBy }) => {
  if (city) {
    const gymsFromDb = await Gym.find({ city })
      .populate("exerciseFacilities")
      .populate("otherFacilities");
    return gymsFromDb;
  } else {
    const gymsFromDb = await Gym.find({})
      .populate("exerciseFacilities")
      .populate("otherFacilities");
    return gymsFromDb;
  }
};

module.exports = gyms;
