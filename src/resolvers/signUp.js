const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signUp = async (_, { input }) => {
  const user = await User.create(input);

  const {
    firstName,
    lastName,
    email,
    password,
    profileImageUrl,
    city,
    bio,
    goals,
    interests,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    isGymOwner,
  } = user;

  const token = signToken({
    firstName,
    lastName,
    email,
    password,
    profileImageUrl,
    city,
    bio,
    goals,
    interests,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    isGymOwner,
  });

  return {
    token,
    user,
  };
};

module.exports = signUp;
