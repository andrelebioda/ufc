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

export const getFighterByClass = async (req, res) => {
    try {
        const weightClass = req.params.weightClass;
        const fighters = await fighter.find({ "weightClass": String(weightClass) });
        console.log(fighters)
        res.status(200).json(fighters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getFighterById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundFighter = await fighter.findById(id);
        if (foundFighter) {
            res.status(200).json(foundFighter);
        } else {
            res.status(404).json({ message: "Kämpfer nicht gefunden" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}