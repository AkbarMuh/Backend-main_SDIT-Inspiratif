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

router.post('/kelas/list/',(req,res)=>{
    const sql = "SELECT * FROM siswa WHERE kelas Like '?%'";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})


export default router;