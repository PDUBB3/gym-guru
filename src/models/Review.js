const { Schema, model } = require("mongoose");

const schema = {
  gymId: {
    type: Schema.Types.ObjectId,
    ref: "Gym",
  },
  categories: [
    {
      category: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  comment: {
    type: String,
  },
};

const reviewSchema = new Schema(schema);

const Review = model("Review", reviewSchema);

module.exports = Review;
