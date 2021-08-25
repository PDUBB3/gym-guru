const { User } = require("../models");

const users = async (_, { city }) => {
  if (city) {
    const usersFromDb = await User.find({ city })
      .populate("buddies")
      .populate("attendingGymId");
    return usersFromDb;
  }

  const usersFromDb = await User.find({})
    .populate("buddies")
    .populate("attendingGymId");

  return usersFromDb;
};

module.exports = users;
