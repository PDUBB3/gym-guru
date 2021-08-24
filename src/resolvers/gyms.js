const { Gym } = require("../models");

const gyms = async (
  _,
  { city, sortBy, exerciseFacilities, otherFacilities }
) => {
  const filterObject = {};

  if (city) {
    filterObject.city = city;
  }
  if (exerciseFacilities) {
    filterObject.exerciseFacilities = {
      $in: exerciseFacilities,
    };
  }
  if (otherFacilities) {
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
