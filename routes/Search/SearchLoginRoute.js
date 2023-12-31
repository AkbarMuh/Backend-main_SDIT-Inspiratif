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
    const sql = "SELECT * FROM login WHERE id_Guru Like '?%'";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/nama/',(req,res)=>{
    const sql = "SELECT * FROM login WHERE Nama Like ?";
    db.query(sql, [req.body.key + '%', req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Success ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.post('/role/',(req,res)=>{
    const sql = "SELECT * FROM login WHERE Role Like ?";
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