import express from "express";

import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"

})

router.get('/siswa/', (req, res) => {
    // Query to fetch data from the siswa table
    const sqlSiswa = `
        SELECT *
        FROM siswa
        WHERE 1;
    `;

    // Query to fetch data from the kelas table
    const sqlKelas = `
        SELECT *
        FROM kelas
        WHERE 1;
    `;

    // Query to fetch data from the guru table
    const sqlGuru = `
        SELECT *
        FROM guru
        WHERE 1;
    `;

    // Execute all queries in parallel
    db.query(sqlSiswa, (errSiswa, dataSiswa) => {
        if (errSiswa) {
            console.error(errSiswa);
            return res.json({ Message: "Server Error" });
        }

        // Check if siswa data is available
        if (dataSiswa.length > 0) {
            // Execute query for kelas
            db.query(sqlKelas, (errKelas, dataKelas) => {
                if (errKelas) {
                    console.error(errKelas);
                    return res.json({ Message: "Server Error" });
                }

                // Execute query for guru
                db.query(sqlGuru, (errGuru, dataGuru) => {
                    if (errGuru) {
                        console.error(errGuru);
                        return res.json({ Message: "Server Error" });
                    }

                    // Format the data
                    const formattedData = dataSiswa.map(siswa => ({
                        ...siswa,
                        kelas: dataKelas.find(k => k.ID === siswa.kelas),
                        Wali_Kelas: dataGuru.find(g => g.ID === siswa.Wali_Kelas)
                    }));

                    return res.json({ Title: "List Data Siswa", Status: "Success", Isi: formattedData });
                });
            });
        } else {
            return res.json({ Message: "No Record" });
        }
    });
});


router.get('/guru/',(req,res)=>{
    const sql = "SELECT * FROM `guru` WHERE 1;";
    db.query(sql, [req.body.key, req.body.password, req.body.status], (err, data) => {
        if(err) return res.json({Message: "Server Erorr"})
        if (data.length > 0){
            return res.json({Status: "Jumlah Data Orangtua ", Isi: data });
        }else{
            return res.json({Message: "No Record"});
        }
    })
})

router.get('/kelas/', (req, res) => {
    const sqlKelas = `
        SELECT *
        FROM kelas
        WHERE 1;
    `;

    db.query(sqlKelas, (errKelas, dataKelas) => {
        if (errKelas) {
            console.error(errKelas);
            return res.json({ Message: "Server Error" });
        }

        if (dataKelas.length > 0) {
            const kelasFormattedData = dataKelas.map(row => ({ ...row }));

            // Check if there are WaliKelas values to include in the WHERE clause
            const waliKelasIds = dataKelas.map(row => row.WaliKelas).filter(Boolean);
            const KelasIds = dataKelas.map(row => row.ID);

            if (waliKelasIds.length > 0) {
                const sqlWaliKelas = `
                    SELECT 
                        *,
                        (
                            SELECT COUNT(*) 
                            FROM siswa s 
                            WHERE s.kelas = k.ID
                        ) AS banyakSiswa
                    FROM guru
                    WHERE ID IN (${waliKelasIds.join(',')});
                `;
                        
                db.query(sqlWaliKelas, (errWaliKelas, dataWaliKelas) => {
                    if (errWaliKelas) {
                        console.error(errWaliKelas);
                        return res.json({ Message: KelasIds });
                    }
                    if (dataWaliKelas.length > 0) {
                        const sqlbanyaksiswa = `
                            SELECT COUNT(kelas)
                            FROM siswa
                            WHERE kelas IN (${KelasIds.join(',')});
                        `;
                        
                        db.query(sqlbanyaksiswa, [req.body.key, req.body.password, req.body.status], (err, banyakSiswa) => {
                            if(err) return res.json({Message: KelasIds})
                            if (banyakSiswa.length > 0){
                                const waliKelasFormattedData = dataWaliKelas.map(row => ({ ...row }));
        
                                const formattedData = kelasFormattedData.map(row => ({
                                    kelas: {
                                        ID: row.ID,
                                        Grade_Kelas: row.Grade_Kelas,
                                        walikelas: row.WaliKelas != null
                                            ? waliKelasFormattedData.find(wk => wk.ID === row.WaliKelas)
                                            : "-",
                                        NamaKelas: row.NamaKelas,
                                        Tahun_Masuk: row.Tahun_Masuk,
                                        banyakSiswa: row.banyakSiswa,
                                        createAt: row.createAt,
                                        updateAt: row.updateAt
                                    }
                                }));
        
                                return res.json({ Status: "Success", Isi: formattedData });
                            } else {
                                return res.json({ Message: "No Record for WaliKelas" });
                            }
                        });




                    }else{
                        return res.json({Message: "No Record"});
                    }
                })

                
            } else {
                // Handle the case where there are no WaliKelas values
                const formattedData = kelasFormattedData.map(row => ({
                    kelas: {
                        ID: row.ID,
                        Grade_Kelas: row.Grade_Kelas,
                        walikelas: "-",
                        NamaKelas: row.NamaKelas,
                        Tahun_Masuk: row.Tahun_Masuk,
                        createAt: row.createAt,
                        updateAt: row.updateAt
                    }
                }));
                return res.json({ Status: "Success", Isi: formattedData });
            }
        } else {
            return res.json({ Message: "No Record for Kelas" });
        }
    });
});

router.get('/ortu/', (req, res) => {
    // Query to fetch data from the ortu table
    const sqlOrtu = `
        SELECT *
        FROM ortu
        WHERE 1;
    `;
    const sqlSiswa = `
        SELECT *
        FROM siswa
        WHERE 1;
    `;

    // Execute all queries in parallel
    db.query(sqlOrtu, (errOrtu, dataOrtu) => {
        if (errOrtu) {
            console.error(errOrtu);
            return res.json({ Message: "Server Error" });
        }

        // Check if siswa data is available
        if (dataOrtu.length > 0) {
            // Execute query for kelas
            db.query(sqlSiswa, (errSiswa, dataSiswa) => {
                if (errSiswa) {
                    console.error(errSiswa);
                    return res.json({ Message: "Server Error" });
                }

                    // Format the data
                    const formattedData = dataOrtu.map(ortu => ({
                        ...ortu,
                        siswa: dataSiswa.find(k => k.ID === ortu.ID_Siswa),
                    }));

                    return res.json({Title: "List Data Orang Tua", Status: "Success", Isi: formattedData });
                
            });
        } else {
            return res.json({ Message: "No Record" });
        }
    });
});



router.get('/ortu-anak', (req, res) => {
    const sql = "SELECT * FROM siswa";
    db.query(sql, (err, students) => {
        if (err) {
            console.error(err);
            return res.json({ Message: "Server Error" });
        }
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
