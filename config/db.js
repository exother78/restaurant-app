const mongoose = require("mongoose");
const pusher = require("../config/pusher");

const connectDB = async () => {
  await mongoose.connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log("Database connected");
};

const db = mongoose.connection;

db.once("open", () => {
  // console.log("something is happening in the restaurant");
  // console.log("db is here", db.collection("users"));

  const ordersCollection = db.collection("users");
  const changeStream = ordersCollection.watch();

  // console.log("changeStream: ", changeStream);

  changeStream.on("change", (change) => {
    console.log("there is some change in somewhere", change);

    console.log("full document: ", change.fullDocument);

    pusher.trigger("messages", "something", {
      message: "hello world",
      msg: "something added",
    });
  });
});

module.exports = connectDB;
