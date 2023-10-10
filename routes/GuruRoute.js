import express from "express";
import {
    getGurus, 
    getGuruById,
    createGuru,
    updateGuru,
    deleteGuru
} from "../controllers/GuruController.js";

const router = express.Router();

router.get('/gurus', getGurus);
router.get('/gurus/:id', getGuruById);
router.post('/gurus', createGuru);
router.patch('/gurus/:id', updateGuru);
router.delete('/gurus/:id', deleteGuru);

export default router;