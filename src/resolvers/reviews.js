const { Review } = require("../models");

const reviews = async (_, { gymId }) => {
  const gymReviews = await Review.find({ gymId });
  return gymReviews;
};

module.exports = reviews;
