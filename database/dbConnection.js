import mongoose from "mongoose";

console.log(process.env)

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "JOB_APPLICATION",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
