const { Buddies, User } = require("../models");

const buddyRequests = async (_, { input }) => {
  const { requesterId, recipientId } = input;

  const docA = await Buddies.findOneAndUpdate(
    { requesterId, recipientId },
    { $set: { status: 2 } },
    { upsert: true, new: true }
  );

  return docA;
};

const acceptBuddyRequest = async (_, { input }) => {
  const { requesterId, recipientId } = input;

  const updateDocA = await Buddies.findOneAndUpdate(
    { requesterId, recipientId },
    { $set: { status: 3 } },
    { new: true }
  );

  return updateDocA;
};

const rejectBuddyRequest = async (_, { input }) => {
  const { requesterId, recipientId } = input;

  const docA = await Buddies.findOneAndRemove({ requesterId, recipientId });

  return docA;
};

module.exports = { buddyRequests, acceptBuddyRequest, rejectBuddyRequest };
