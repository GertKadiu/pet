import mongoose from "mongoose";

const CatsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  temperament: {
    type: String,
  },
  description: {
    type: String
  },
  colors: {
    type: String
  },
  origin: {
    type: String,
    require: true
  },
  image: {
    type: String
  }
},{timestamps: true});

const CatsModel = mongoose.model("Cats", CatsSchema);

export default CatsModel;
