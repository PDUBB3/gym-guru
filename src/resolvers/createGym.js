const { Gym } = require("../models");

const createGym = async (_, { input }) => {
  const {
    name,
    imageURL,
    address,
    city,
    postCode,
    contactNumber,
    openingTimes,
    exerciseFacilities,
    otherFacilities,
  } = input;

  const newGym = await Gym.create({
    name,
    imageURL,
    address,
    city,
    postCode,
    contactNumber,
    openingTimes,
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
