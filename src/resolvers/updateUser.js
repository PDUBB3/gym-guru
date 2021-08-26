const { User } = require("../models");

const updateUser = async (_, { input }) => {
  const {
    id,
    firstName,
    lastName,
    username,
    profileImageUrl,
    city,
    bio,
    goals,
    interests,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    isGymOwner,
  } = input;

  const updateUser = await User.findByIdAndUpdate(id, {
    firstName,
    lastName,
    username,
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

  return updateUser;
};

module.exports = updateUser;
