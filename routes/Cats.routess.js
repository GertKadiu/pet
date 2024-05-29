import express from "express";
import { createCat, deleteCatById, getCatById, getCats, updateCatById } from "../controllers/Cats.controller.js";



const router = express.Router()

router.get("/", getCats)
router.post("/createCat", createCat)
router.put("/updatecats/:id", updateCatById)
router.delete("/deleteCat/:id", deleteCatById)
router.get("/:id", getCatById)

export default router;