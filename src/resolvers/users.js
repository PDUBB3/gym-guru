const { User } = require("../models");

const users = async (_, { city }) => {
  if (city) {
    const usersFromDb = await User.find({ city });
    return gymsFromDb;
  }

  const usersFromDb = await User.find({});

  return usersFromDb;
};

module.exports = users;
