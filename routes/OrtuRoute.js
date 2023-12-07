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

router.get('/ortuanak', (req, res) => {
    const sql = "SELECT * FROM siswa";
    db.query(sql, (err, students) => {
        if (err) {
            console.error(err);
            return res.json({ Message: "Server Error" });
        }

        const studentsWithParents = [];

        if (students.length > 0) {
            Promise.all(
                students.map(student => {
                    const sql1 = "SELECT * FROM ortu WHERE ID_Siswa = ?";
                    return new Promise((resolve, reject) => {
                        db.query(sql1, [student.ID], (err, parents) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                // Include the student only if they have parents
                                if (parents.length > 0) {
                                    resolve({
                                        Anak: student,
                                        Ortu: parents
                                    });
                                } else {
                                    resolve(null); // Skip this student
                                }
                            }
                        });
                    });
                })
            )
                .then(result => {
                    // Filter out null entries (students without parents)
                    const filteredResult = result.filter(entry => entry !== null);
                    return res.json({
                        Status: "Success",
                        Data: filteredResult
                    });
                })
                .catch(error => {
                    return res.json({ Message: "Server Error" });
                });
        } else {
            return res.json({ Message: "No Record" });
        }
    });
});





export default router;