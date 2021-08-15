const { User } = require("../models");

const findUser = async (_, { username }) => {
  const user = await User.findOne({ username }).populate("buddies");
  return user;
};

module.exports = findUser;
