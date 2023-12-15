import express from "express";

import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

router.post('/namaAngkatan/',(req,res)=>{
    const sql = "SELECT * FROM kelas WHERE Nama_Angkatan Like ?";
    db.query(sql, [`%${req.body.key}%`], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/namaKelas/',(req,res)=>{
    const sql = "SELECT * FROM kelas WHERE NamaKelas Like ?";
    db.query(sql, [`%${req.body.key}%`], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})



export default router;

