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

const reviewCategories = ["Cleanliness", "Staff", "Facilities"];
const comments = [
  "Very clean gym, nice choice of machines for different workouts. I did find the staff quite rude though and not that knowledgeable.",
  "I absolutely love the team at this gym, all of the staff are so helpful. My only negative is that the actual gym isn't that large and there aren't any fitness studios.",
  "It was my first trip back to the gym since their reopening, and quite honestly, I did not feel comfortable with the lack of COVID controls.",
  "Can't rate this gym highly enough, great selection of equipment, nice leisure area and staff are always so polite and eager to help.",
];

db.once("open", async () => {
  try {
    // Delete all models
    await Gym.deleteMany({});
    await ExerciseFacilities.deleteMany({});
    await OtherFacilities.deleteMany({});
    await Review.deleteMany({});

    console.log("Collections deleted!!!");

    // Seeding facilities
    await ExerciseFacilities.insertMany(exerciseFacilities);
    console.log("ExerciseFacilities seeded successfully!!!");

    await OtherFacilities.insertMany(otherFacilities);
    console.log("OtherFacilities seeded successfully!!!");

    const exerciseFacilitiesFromDb = await ExerciseFacilities.find({});
    const otherFacilitiesFromDb = await OtherFacilities.find({});

    // Seeding gyms
    const gymsToSeed = gyms.map((gym) => {
      const randomNumOfExerciseFacilities =
        Math.floor(Math.random() * (exerciseFacilitiesFromDb.length - 1)) + 2;
      const randomNumOfOtherFacilities =
        Math.floor(Math.random() * (otherFacilitiesFromDb.length - 1)) + 2;

      const exerciseFacilities = exerciseFacilitiesFromDb
        .map((exerciseFacility) => exerciseFacility.id)
        .slice(0, randomNumOfExerciseFacilities);

      const otherFacilities = otherFacilitiesFromDb
        .map((otherFacility) => otherFacility.id)
        .slice(0, randomNumOfOtherFacilities);

      return {
        ...gym,
        exerciseFacilities,
        otherFacilities,
      };
    });

    await Gym.insertMany(gymsToSeed);
    console.log("Gyms seeded successfully!!!");

    // Find gyms and seed reviews
    const gymsFromDb = await Gym.find({});

    const reviews = gymsFromDb.map((gym) => {
      const gymId = gym.id;
      const categories = reviewCategories.map((category) => ({
        category,
        rating: Math.floor(Math.random() * 6),
      }));
      const comment = comments[Math.floor(Math.random() * 4)];

      return {
        gymId,
        categories,
        comment,
      };
    });

    await Review.insertMany(reviews);
    console.log("Reviews seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
