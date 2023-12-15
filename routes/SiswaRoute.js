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

import mysql from "mysql";
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

router.patch('/adddkelas-siswa/', (req, res) => {
    const sql = "UPDATE `siswa` SET `kelas` = ? WHERE `siswa`.`ID` = ?";
    db.query(sql, [req.body.ID_kelas,req.body.ID_Siswa], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        return res.json({Message: "Success", ID_Siswa: req.body.ID_Siswa, ID_Kelas: req.body.ID_kelas});
    })
})

export default router;