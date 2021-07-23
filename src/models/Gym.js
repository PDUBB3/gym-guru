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
  openingTimes: [
    {
      dayIndex: Number,
      required: true,
    },
    {
      dayName: String,
      required: true,
    },
    {
      dayShort: String,
      required: true,
    },
    {
      startTime: String,
      required: true,
    },
    {
      endTime: String,
      required: true,
    },
  ],
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
