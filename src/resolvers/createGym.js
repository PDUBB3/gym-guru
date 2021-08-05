const { Gym } = require("../models");

const createGym = async (_, { input }) => {
  const {
    name,
    address,
    city,
    postCode,
    contactNumber,
    exerciseFacilities,
    otherFacilities,
  } = input;

  const newGym = await Gym.create({
    name,
    address,
    city,
    postCode,
    contactNumber,
    rating: 0,
    exerciseFacilities,
    otherFacilities,
  });

  const gym = await Gym.findById(newGym.id)
    .populate("exerciseFacilities")
    .populate("otherFacilities");

  return gym;
};

module.exports = createGym;
