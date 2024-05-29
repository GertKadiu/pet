import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UsersRouter from "./routes/Dogs.routes.js";
import BirdRouter from "./routes/Birds.routes.js";
import CatRouter from "./routes/Cats.routess.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

dotenv.config();

const MONGO_URI = process.env.mongoURI;
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("uploads"));
app.use(express.json());
app.use(express.static(path.join(__dirname + "public"))); 
app.use(cors());
app.use("/api/dogs", UsersRouter);
app.use("/api/cats", CatRouter);
app.use("/api/birds", BirdRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
