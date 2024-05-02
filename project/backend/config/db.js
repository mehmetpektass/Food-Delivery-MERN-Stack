import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pektasmehmett:8150144750274301@mehmet.a0cjm4o.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
