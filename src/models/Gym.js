const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  openingTimes: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  exerciseFacilities: {
    type: Schema.Types.ObjectId,
    ref: "ExerciseFacilities",
  },
  otherFacilities: {
    type: Schema.Types.ObjectId,
    ref: "OtherFacilities",
  },
};

const gymSchema = new Schema(schema);

const Gym = model("Gym", gymSchema);

module.exports = Gym;
