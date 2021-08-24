const { Gym } = require("../models");

const gyms = async (
  _,
  { city, sortBy, exerciseFacilities, otherFacilities }
) => {
  const filterObject = {};

  if (city) {
    filterObject.city = city;
  }
  if (exerciseFacilities && exerciseFacilities.length) {
    filterObject.exerciseFacilities = {
      $in: exerciseFacilities,
    };
  }
  if (otherFacilities && otherFacilities.length) {
    filterObject.otherFacilities = {
      $in: otherFacilities,
    };
  }

  if (sortBy) {
    return Gym.find(filterObject)
      .sort({ [sortBy]: -1 })
      .populate("exerciseFacilities")
      .populate("otherFacilities");
  }

  return Gym.find(filterObject)
    .populate("exerciseFacilities")
    .populate("otherFacilities");
};

module.exports = gyms;
