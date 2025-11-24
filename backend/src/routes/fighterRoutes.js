import express from "express";
import { getAllFighter, createFighter } from "../controllers/fighterController.js";

const router = express.Router();

router.post("/post/newFighter", createFighter);
router.get("/get/allFighter", getAllFighter);

export default router;