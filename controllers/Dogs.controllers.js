import DogsModel from "../models/Dogs.models.js";
export const getDogs = async (req, res) => {
  try {
    const dogs = await DogsModel.find();
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Dogs!" });
  }
};

export const createDog = async (req, res) => {
  const {
    name,
    breed_group,
    size,
    lifespan,
    origin,
    temperament,
    colors,
    description,
    image,
  } = req.body;
  try {
    const newDog = new DogsModel({
      name,
      breed_group,
      size,
      temperament,
      lifespan,
      origin,
      description,
      colors,
      image,
    });
    await newDog.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create DOG!" });
  }
};

export const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    const Dog = await DogsModel.findById(id);

    if (!Dog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.status(200).json(Dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get Dog" });
  }
};

export const updateDogsById = async (req, res) => {
  const { id } = req.params;
  try {
    await DogsModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        breed_group: req.body.breed_group,
        size: req.body.size,
        lifespan: req.body.lifespan,
        origin: req.body.origin,
        temperament: req.body.temperament,
        description: req.body.description,
        colors: req.body.colors,
        image: req.body.image,
      },
      { new: true }
    )
      .then((updateDog) => res.json(updateDog))
      .catch((error) => res.status(500).json(error));
  } catch (error) {
    console.error("Error reading and encoding image:", error);
    res.status(500).json({ error: "Error reading and encoding image" });
  }
};

export const deleteDogById = (req, res) => {
  const { id } = req.params;
  DogsModel.findByIdAndDelete(id)
    .then((dog) => {
      if (!dog) {
        return res.status(404).json({ message: "Dog not found" });
      }
      res.json({ message: "Dog deleted successfully" });
    })
    .catch((err) =>
      res.status(500).json({ message: "Failed to delete dog", error: err })
    );
};
