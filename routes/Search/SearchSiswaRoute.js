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
    const sql = "SELECT * FROM siswa WHERE ID Like '?%'";
    db.query(sql, [req.body.key], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/nama/',(req,res)=>{
    const sql = "SELECT * FROM siswa WHERE nama Like ?";
    db.query(sql, [`%${req.body.key}%`], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/id/?:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.json({ Message: "Invalid ID format" });
    }

    const sql = "SELECT * FROM siswa WHERE ID LIKE ?";
    db.query(sql, [`%${id}%`], (err, data) => {
        if (err) return res.json({ Message: "Server Error" });
        if (data.length > 0) {
            return res.json({ Status: "Success", Isi: data });
        } else {
            return res.json({ Message: "No Record" });
        }
    });
});



router.post('/Ortubyid/',(req,res)=>{
    const sql = "SELECT * FROM ortu WHERE ID Like '?%'";
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
    const sql = "SELECT * FROM siswa WHERE nama Like ? ";
    db.query(sql, [req.body.key + '%', req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr i"})
        if (data.length > 0){
            const sql1 = "SELECT * FROM ortu WHERE ID Like '?%'";
            db.query(sql1, [data[0].ID, req.body.password, req.body.status], (err, data2) => {
                if(err) return res.json({Message: "Server Erorr h"})
                if (data.length > 0){
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


router.post('/byKelas/',(req,res)=>{
    const sql = "SELECT * FROM siswa WHERE kelas Like ? ";
    db.query(sql, [req.body.key + '%', req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

export default router;

// db.query("SELECT * FROM login WHERE 1", (err,data)=>{
//     return res.json({Status: data})
// })