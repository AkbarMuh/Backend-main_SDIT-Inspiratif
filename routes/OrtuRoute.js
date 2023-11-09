import express from "express";
import {
    getOrtus, 
    getOrtuById,
    createOrtu,
    updateOrtu,
    deleteOrtu
} from "../controllers/OrtuController.js";

const router = express.Router();

router.get('/ortu', getOrtus);
router.get('/ortu/:id', getOrtuById);
router.post('/ortu', createOrtu);
router.patch('/ortu/:id', updateOrtu);
router.delete('/ortu/:id', deleteOrtu);

export default router;