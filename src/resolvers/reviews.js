const { Review } = require("../models");

const reviews = async (_, { gymId }) => {
  const gymReviews = await Review.find({ gymId });
  return gymReviews;
};

const addReview = async (_, { input }) => {
  const newReview = await Review.create(input);
  return newReview;
};

module.exports = { reviews, addReview };
