import fighter from "../models/fighter.js";

export const getAllFighter = async (req, res) => {
    try {
        const fighters = await fighter.find();
        res.status(200).json(fighters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createFighter = async (req, res) => {
    try {
        const newFighter = new fighter(req.body);
        const saved = await newFighter.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

