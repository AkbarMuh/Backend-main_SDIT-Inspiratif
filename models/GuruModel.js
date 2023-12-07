import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Guru = db.define('guru',{
    nama: DataTypes.STRING,
    Email	: DataTypes.STRING,
    Nomor_HP: DataTypes.STRING,
    Tempat_Lahir: DataTypes.STRING,
    Tanggal_Lahir: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Lulusan: DataTypes.STRING,
    Jurusan: DataTypes.STRING,
    Nama_Perguruan_Tinggi: DataTypes.STRING,
    Sertifikat	: DataTypes.STRING,
    publikasi	: DataTypes.STRING,
    KK: DataTypes.STRING
},{
    freezeTableName:true
});

export default Guru;

(async()=>{
    await db.sync();
})();