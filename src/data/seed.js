const db = require("../config/connection");
const {
  Gym,
  ExerciseFacilities,
  OtherFacilities,
  Review,
} = require("../models");
const gyms = require("./gyms.json");
const exerciseFacilities = require("./exerciseFacilities.json");
const otherFacilities = require("./otherFacilities.json");
const reviews = require("./reviews.json");

db.once("open", async () => {
  try {
    await Gym.deleteMany({});
    await ExerciseFacilities.deleteMany({});
    await OtherFacilities.deleteMany({});
    await Review.deleteMany({});

    console.log("Collections deleted!!!");

    await ExerciseFacilities.insertMany(exerciseFacilities);
    console.log("ExerciseFacilities seeded successfully!!!");

    await OtherFacilities.insertMany(otherFacilities);
    console.log("OtherFacilities seeded successfully!!!");

    await Review.insertMany(reviews);
    console.log("Reviews seeded successfully!!!");

    const exerciseFacilitiesFromDb = await ExerciseFacilities.find({});
    const otherFacilitiesFromDb = await OtherFacilities.find({});
    const reviewsFromDb = await Review.find({});

    const gymsToSeed = gyms.map((gym, index) => {
      return {
        ...gym,
        exerciseFacilities: exerciseFacilitiesFromDb[index]._id,
        otherFacilities: otherFacilitiesFromDb[index]._id,
        // reviews: reviewsFromDb[index]._id,
      };
    });

    await Gym.insertMany(gymsToSeed);
    console.log("Gyms seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
