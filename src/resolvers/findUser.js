const { User } = require("../models");

const findUser = async (_, { username }) => {
  const user = await User.findOne({ username })
    .populate("buddies")
    .populate("attendingGymId");
  return user;
};

module.exports = findUser;
