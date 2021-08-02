const { OtherFacilities } = require("../models");

const otherFacilities = async () => {
  const facilities = await OtherFacilities.find({});
  return facilities;
};

module.exports = otherFacilities;
