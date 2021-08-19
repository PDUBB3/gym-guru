const { Schema, model } = require("mongoose");

const { hashPassword, validatePassword } = require("../utils/password");

const schema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isGymOwner: {
    type: Boolean,
    default: false,
  },
  ownedGymId: {
    type: Schema.Types.ObjectId,
    ref: "Gym",
  },
  attendingGymId: {
    type: Schema.Types.ObjectId,
    ref: "Gym",
  },
  profileImageUrl: {
    type: String,
  },
  city: {
    type: String,
  },
  bio: {
    type: String,
  },
  goals: {
    type: [String],
  },
  interests: {
    type: [String],
  },
  buddies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Buddies",
    },
  ],
};

const userSchema = new Schema(schema);

userSchema.pre("save", hashPassword);

userSchema.methods.validatePassword = validatePassword;

const User = model("User", userSchema);

module.exports = User;
