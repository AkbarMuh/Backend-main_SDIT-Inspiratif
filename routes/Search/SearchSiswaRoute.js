import express from "express";

import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

router.post('/id/',(req,res)=>{
    const sql = "SELECT * FROM siswa WHERE ID_Siswa Like '?%'";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/Ortubyid/',(req,res)=>{
    const sql = "SELECT * FROM ortu WHERE ID_Siswa Like '?%'";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/OrtubyNama/',(req,res)=>{
    const sql = "SELECT * FROM siswa WHERE name Like ? ";
    db.query(sql, [req.body.key + '%', req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            const sql1 = "SELECT * FROM ortu WHERE ID_Siswa Like '?%'";
            db.query(sql1, [data[0].id_siswa, req.body.password, req.body.status], (err, data2) => {
                if(err) return res.json({Message: "Server Erorr"})
                if (data2.length > 0){
                    return res.json({Status: "Success ", Nama_Anak: data,Nama_Ortu: data2 });
                }else{
                    return res.json({Message: "No Record"});
                }
            })
                    
        }else{
            return res.json({Message: "No Record"});
        }
    })
})


export default router;

// db.query("SELECT * FROM login WHERE 1", (err,data)=>{
//     return res.json({Status: data})
// })