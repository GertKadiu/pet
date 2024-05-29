import express from "express";
import { createBirds, deleteBirdById, getBirdById, getBirds, updateBirdById } from "../controllers/Birds.controller.js";



const router = express.Router()

router.get("/", getBirds)
router.post("/createBird", createBirds)
router.put("/updatebirds/:id", updateBirdById)
router.delete("/deleteBird/:id", deleteBirdById)
router.get("/:id", getBirdById)

export default router;