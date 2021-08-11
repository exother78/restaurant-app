const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("Database connected");
};

module.exports = connectDB;
