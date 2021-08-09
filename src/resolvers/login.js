const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");

const login = async (_, { input }) => {
  const { username, password } = input;

  const user = await User.findOne({ username });

  if (!user) {
    throw new AuthenticationError("User does not exist");
  }

  const isValidPassword = await user.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError("Incorrect username or password");
  }
};

module.exports = login;
