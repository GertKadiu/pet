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

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(__dirname)



// app.use(express.static("uploads"));
app.use(express.json());
// app.use(express.static(path.join(__dirname + "public"))); 
app.use(cors());
app.use("/api/dogs", UsersRouter);
app.use("/api/cats", CatRouter);
app.use("/api/birds", BirdRouter);

const __dirname1 = path.resolve();

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname1, '/task/build')))

  app.get('*' , (req, res) => {
    res.sendFile(path.resolve(__dirname1, 'task', 'build', 'index.html'))
  })

} else {
  app.get('/', (req, res) => {
  res.send("Api is working successfully")
})

}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
