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
      dayIndex: {
        type: Number,
        required: true,
      },
      dayName: {
        type: String,
        required: true,
      },
      dayShort: {
        type: String,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  exerciseFacilities: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExerciseFacilities",
    },
  ],
  otherFacilities: [
    {
      type: Schema.Types.ObjectId,
      ref: "OtherFacilities",
    },
  ],
};

const gymSchema = new Schema(schema);

const Gym = model("Gym", gymSchema);

module.exports = Gym;
