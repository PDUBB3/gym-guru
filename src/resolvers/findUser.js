const { User } = require("../models");

const findUser = async (_, { id }) => {
  const user = await User.findById(id).populate("buddies");
  return user;
};

module.exports = findUser;
