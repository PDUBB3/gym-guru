const { Gym } = require("../models");

const createGym = async (_, { input }) => {
  return await Gym.create({
    name,
    address,
    city,
    postCode,
    contactNumber,
    rating: 0,
    exerciseFacilities: [],
    otherFacilities: [],
  });
};

module.exports = createGym;
