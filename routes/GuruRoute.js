import express from "express";
import {
    getGurus, 
    getGuruById,
    createGuru,
    updateGuru,
    deleteGuru
} from "../controllers/GuruController.js";

const router = express.Router();

router.get('/guru', getGurus);
router.get('/guru/:id', getGuruById);
router.post('/guru', createGuru);
router.patch('/guru/:id', updateGuru);
router.delete('/guru/:id', deleteGuru);

export default router;