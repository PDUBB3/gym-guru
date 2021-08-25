const { getNamedType } = require("graphql");
const { Gym } = require("../models");

const updateGym = async (_, { input }) => {
  const {
    name,
    id,
    imageURL,
    address,
    city,
    postCode,
    contactNumber,
    openingTimes,
    exerciseFacilities,
    otherFacilities,
  } = input;
  const updatedGym = await Gym.findByIdAndUpdate(id, {
    name,
    imageURL,
    address,
    city,
    postCode,
    contactNumber,
    openingTimes,
    exerciseFacilities,
    otherFacilities,
  })
    .populate("exerciseFacilities")
    .populate("otherFacilities");
  return updatedGym;
};

module.exports = updateGym;
