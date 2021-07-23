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

    await Gym.insertMany(gyms);
    console.log("Gyms seeded successfully!!!");

    // const menusFromDb = await Menu.find({});

    // const restaurantsToSeed = restaurants.map((restaurant, index) => {
    //   return {
    //     ...restaurant,
    //     menu: menusFromDb[index]._id,
    //   };
    // });

    // await Restaurant.insertMany(restaurantsToSeed);
    // console.log("Restaurants seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
