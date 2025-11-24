import express from "express";
import { getAllFighter, createFighter, getFighterByClass } from "../controllers/fighterController.js";

const router = express.Router();

router.post("/post/newFighter", createFighter);
router.get("/get/allFighter", getAllFighter);
router.get("/get/fighterByClass/:weight", getFighterByClass);

export default router;