import express from "express";
import { getAllFighter, createFighter, getFighterByClass, getFighterById } from "../controllers/fighterController.js";

const router = express.Router();

router.post("/post/newFighter", createFighter);
router.get("/get/allFighter", getAllFighter);
router.get("/get/fighterByClass/:weightClass", getFighterByClass);
router.get("/get/fighterBy/:id", getFighterById);

export default router;