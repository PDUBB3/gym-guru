const { ExerciseFacilities } = require("../models");

const exerciseFacilities = async () => {
  const facilities = await ExerciseFacilities.find({});
  return facilities;
};

module.exports = exerciseFacilities;
