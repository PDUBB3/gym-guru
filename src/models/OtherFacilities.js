const { Schema, model } = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const otherFacilitiesSchema = new Schema(schema);

const OtherFacilities = model("OtherFacilities", otherFacilitiesSchema);

module.exports = OtherFacilities;
