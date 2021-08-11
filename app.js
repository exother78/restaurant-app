require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Database
connectDB();

// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/user", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/ProductRoute"));
app.use("/api", require("./routes/CategoryRoute"));
app.use("/api", require("./routes/Reservoir"));

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));
