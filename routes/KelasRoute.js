import express from "express";

import mysql from "mysql";

import {
    getKelass, 
    getKelasById,
    createKelas,
    updateKelas,
    deleteKelas
} from "../controllers/KelasController.js";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})
const router = express.Router();

router.get('/kelas', getKelass);
router.get('/kelas/:id', getKelasById);
router.post('/kelas', createKelas);
router.patch('/kelas/:id', updateKelas);
router.delete('/kelas/:id', deleteKelas);




export default router;