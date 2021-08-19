const { Schema, model } = require("mongoose");

const schema = {
  requesterId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Number,
    enums: [
      1, //'requested',
      2, //'pending',
      3, //'friends'
    ],
  },
};

const buddiesSchema = new Schema(schema);

const Buddies = model("Buddies", buddiesSchema);

module.exports = Buddies;
