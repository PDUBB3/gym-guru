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

const updateAttendingGym = async (_, { input }) => {
  const { id, attendingGymId } = input;

  const updateAttendingGym = await User.findByIdAndUpdate(
    id,
    {
      attendingGymId,
    },
    { new: true }
  ).populate("attendingGymId");

  return updateAttendingGym;
};

const updateOwnedGym = async (_, { input }) => {
  const { id, ownedGymId } = input;

  const updateOwnedGym = await User.findByIdAndUpdate(
    id,
    {
      ownedGymId,
    },
    { new: true }
  ).populate("ownedGymId");

  return updateOwnedGym;
};

module.exports = { updateUser, updateAttendingGym, updateOwnedGym };
