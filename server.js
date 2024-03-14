import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({


  CLOUDINARY_CLIENT_NAME:"dy8soaigi",
CLOUDINARY_CLIENT_API:"128465349387969",
CLOUDINARY_CLIENT_SECRET:"UrbkyNw49F8GsYjw5awwdvM9rfk",

});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
