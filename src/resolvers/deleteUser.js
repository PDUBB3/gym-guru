const { User } = require("../models");

const deleteUser = async (_, { id }) => {
  await User.findByIdAndDelete(id);
};

module.exports = deleteUser;
