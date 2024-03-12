import mongoose from "mongoose";


export const dbConnection = () => {

  console.log("sdj",process.env.MONGO_URL+'/job')
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to database.");
    })
   
};
