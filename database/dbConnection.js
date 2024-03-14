import mongoose from "mongoose";


export const dbConnection = () => {

  // console.log("sdj",process.env.MONGO_URL+'/job')
  mongoose
    .connect("mongodb+srv://saifcoder04:EKAKFQT8pLL6JJjT@cluster0.dcf8is1.mongodb.net/")
    .then(() => {
      console.log("Connected to database.");
    })
   
};
