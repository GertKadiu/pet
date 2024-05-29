import express from "express";
import { createDog, deleteDogById, getDogById, getDogs, updateDogsById } from "../controllers/Dogs.controllers.js";



const router = express.Router()

router.get("/", getDogs)
router.post("/createDog", createDog)
router.put("/updatedogs/:id", updateDogsById)
router.delete("/deleteDog/:id", deleteDogById)
router.get("/:id", getDogById)

export default router;