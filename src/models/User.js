const { Schema, model } = require("mongoose");

const schema = {
  firstName = {
    type: String,
    required: true,
  },

  lastName = {
    type: String,
    required: true,
  },

  email = {
    type: String,
    required: true,
  },

  username = {
    type: String,
    required: true,
  },

  password = {
    type: String,
    required: true,
  },

  gymId = {
    type: Schema.Types.ObjectId,
    ref: "Gym",
  },

  profileImage = {
    type: String,
  },

  city = {
    type: String,
  },

  bio = {
    type: String,
  },

  goals = {
    type: [String]
  },

  interests = {
    type: [String]
  },

  buddies = [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ]
};

const userSchema = new Schema(schema);

const User = model("User", userSchema);

module.exports = User;
