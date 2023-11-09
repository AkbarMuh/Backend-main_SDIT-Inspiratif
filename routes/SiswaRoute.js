import express from "express";
import {
    getSiswas, 
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
} from "../controllers/SiswaController.js";

const router = express.Router();

router.get('/siswa', getSiswas);
router.get('/siswa/:id', getSiswaById);
router.post('/siswa', createSiswa);
router.patch('/siswa/:id', updateSiswa);
router.delete('/siswa/:id', deleteSiswa);

export default router;