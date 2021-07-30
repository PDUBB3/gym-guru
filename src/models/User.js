const { Schema, model } = require("mongoose");

const schema = {};

const userSchema = new Schema(schema);

const User = model("User", userSchema);

module.exports = User;
