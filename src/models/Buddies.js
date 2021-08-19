const { Schema, model } = require("mongoose");

const schema = {
  requester: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Number,
    enums: [
      0, //'add friend',
      1, //'requested',
      2, //'pending',
      3, //'friends'
    ],
  },
};

const buddiesSchema = new Schema(schema);

const Buddies = model("Buddies", buddiesSchema);

module.exports = Buddies;
