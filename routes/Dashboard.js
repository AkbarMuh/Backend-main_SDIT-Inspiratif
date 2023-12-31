import express from "express";

import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

router.get('/siswa/',(req,res)=>{
    const sql = "SELECT COUNT(ID) FROM `siswa` WHERE 1;";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Title: "Jumlah Data siswa ", Status: "sucesss", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/guru/',(req,res)=>{
    const sql = "SELECT COUNT(ID) FROM `guru` WHERE 1;";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Title: "Jumlah Data guru ", Status: "sucesss", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/ortu/',(req,res)=>{
    const sql = "SELECT COUNT(ID) FROM `ortu` WHERE 1;";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Title: "Jumlah Data Orangtua ", Status: "sucesss", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/kelas/',(req,res)=>{
    const sql = "SELECT COUNT(ID) FROM `kelas` WHERE 1;";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Title: "Jumlah Data kelas ", Status: "sucesss", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})


router.get('/Jumlahsiswa/:id',(req,res)=>{
    const sql = "SELECT COUNT(kelas) FROM `siswa` WHERE kelas = ?;";
    db.query(sql, [req.params.id], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Title: "Jumlah Siswa kelas ", Status: "sucesss", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

export default router;

// db.query("SELECT * FROM login WHERE 1", (err,data)=>{
//     return res.json({Status: data})
// })