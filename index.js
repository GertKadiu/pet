const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const UsersRouter = require("./routes/Dogs.routes")
const CatRouter = require("./routes/Cats.routess")
const BirdRouter = require("./routes/Birds.routes")
require("dotenv").config();

const app = express();

dotenv.config();

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use("/api/dogs", UsersRouter);
app.use("/api/cats", CatRouter);
app.use("/api/birds", BirdRouter);

app.use(express.static(path.join(__dirname + "public")));

app.use(express.static("uploads"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
