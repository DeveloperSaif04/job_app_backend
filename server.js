import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  // cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  // api_key: process.env.CLOUDINARY_CLIENT_API,
  // api_secret: process.env.CLOUDINARY_CLIENT_SECRET,


  CLOUDINARY_CLIENT_NAME:"dy8soaigi",
CLOUDINARY_CLIENT_API:"128465349387969",
CLOUDINARY_CLIENT_SECRET:"UrbkyNw49F8GsYjw5awwdvM9rfk",

});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
