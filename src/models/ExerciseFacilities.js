const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const exerciseFacilitiesSchema = new Schema(schema);

const ExerciseFacilities = model(
  "ExerciseFacilities",
  exerciseFacilitiesSchema
);

module.exports = ExerciseFacilities;
