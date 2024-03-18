// A: Mongoose library ko import kiya gaya.
import mongoose from "mongoose";

// B: Ek asynchronous function define kiya gaya hai jiska naam connectToMongo hai.
const connectToMongo = async () => {
  // C: MongoDB se connect karne ki koshish ki gayi mongoose.connect ka upyog karke.
  const res = await mongoose.connect(
    "mongodb://localhost:27017/mern-gallery-app"
  );

  // D: Check kiya gaya hai ki connection kaamyaab hua ya nahi.
  if (res) {
    // E: Console mein ek success message log kiya gaya hai agar connection kaamyaab hua.
    console.log("Connected Succesffuly");
  }
};

// F: connectToMongo function ko module ka default export kiya gaya hai.
export default connectToMongo;
