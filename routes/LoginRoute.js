import express from "express";

import mysql from "mysql";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const router = express.Router();
router.use(cookieParser());

// router.use(cors(
//     {
//         origin: ["http://localhost:3001"],
//         methods: ["POST,GET"],
//         credentials: true
//     }
// ))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

const verifyUser = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.json({Message: "Kamu belom login ya"})
    }else{
        jwt.verify(token, "our-jsonwebtoken-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Message: "Auth Erorr"})
            }else{
                req.name = decoded.name
                next() 
            }
            
        })
    }
}

router.get('/', verifyUser,(req, res)=>{
    return res.json({Status: "Success", name: req.name})

})

router.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE id_Guru = ? AND Password = ? ";
    db.query(sql, [req.body.id, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            const name = data[0].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key" , {expiresIn: "1d"});
            res.cookie('token',token);
            return res.json({Status: "Success ", Role: data[0].Role, Massage: "Selamat Datang "+data[0].Nama });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({Status: "Success Logout"});
})

export default router;