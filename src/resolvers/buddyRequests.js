const { Buddies, User } = require("../models");

const buddyRequests = async (_, { input }) => {
  console.log(input);

  const { requester, recipient } = input;

  const docA = await Buddies.findOneAndUpdate(
    { requester, recipient },
    { $set: { status: 1 } },
    { upsert: true, new: true }
  );
  const docB = await Buddies.findOneAndUpdate(
    { recipient, requester },
    { $set: { status: 2 } },
    { upsert: true, new: true }
  );

  const updateUserA = await User.findOneAndUpdate(
    { _id: requester },
    { $push: { buddies: docA._id } }
  );
  const updateUserB = await User.findOneAndUpdate(
    { _id: recipient },
    { $push: { buddies: docB._id } }
  );
};

const acceptBuddyRequest = async (_, { input }) => {
  const { requester, recipient } = input;

  const updateDocA = await Buddies.findOneAndUpdate(
    { requester, recipient },
    { $set: { status: 3 } }
  );
  const updateDocB = await Buddies.findOneAndUpdate(
    { recipient, requester },
    { $set: { status: 3 } }
  );
};

const rejectBuddyRequest = async (_, { input }) => {
  const { requester, recipient } = input;

  const docA = await Buddies.findOneAndRemove({ requester, recipient });
  const docB = await Buddies.findOneAndRemove({ requester, recipient });

  const updateUserA = await User.findOneAndUpdate(
    { _id: requester },
    { $pull: { buddies: docA._id } }
  );

  const updateUserB = await User.findOneAndUpdate(
    { _id: recipient },
    { $pull: { buddies: docB._id } }
  );
};

module.exports = { buddyRequests, acceptBuddyRequest, rejectBuddyRequest };
