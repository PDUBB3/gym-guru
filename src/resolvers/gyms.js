const { Gym } = require("../models");

const gyms = async (_, { city, sortBy }) => {
  if (city) {
    const gymsFromDb = await Gym.find({ city })
      .populate("exerciseFacilities")
      .populate("otherFacilities");
    return gymsFromDb;
  }
  if (sortBy === "rating") {
    return await Gym.find({}).sort({ [sortBy]: -1 });
  }

  const gymsFromDb = await Gym.find({})
    .populate("exerciseFacilities")
    .populate("otherFacilities");
  return gymsFromDb;
};

module.exports = gyms;
