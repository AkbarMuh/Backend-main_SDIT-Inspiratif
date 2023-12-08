import express from "express";
import {
    getOrtus, 
    getOrtuById,
    createOrtu,
    updateOrtu,
    deleteOrtu
} from "../controllers/OrtuController.js";
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"
})
router.get('/ortu', getOrtus);
router.get('/ortu/:id', getOrtuById);
router.post('/ortu', createOrtu);
router.patch('/ortu/:id', updateOrtu);
router.delete('/ortu/:id', deleteOrtu);

export default router;