const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("error", error);
  }
};