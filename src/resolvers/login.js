const { AuthenticationError } = require("apollo-server");

const { signToken } = require("../utils/auth");
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

  const token = signToken({
    id: user._id,
    email: user.email,
    username: user.username,
    isGymOwner: user.isGymOwner,
    ownedGymId: user.ownedGymId,
    attendingGymId: user.attendingGymId,
  });

  return { user, token };
};

module.exports = login;
