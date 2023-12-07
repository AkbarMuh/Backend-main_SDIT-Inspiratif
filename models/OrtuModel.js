import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Ortu = db.define('ortu',{
    Jenis: DataTypes.STRING,
    nama: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    Tempat_Lahir: DataTypes.STRING,
    Tanggal_Lahir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pendapatan: DataTypes.STRING,    
    Pendidikan_Terakhir: DataTypes.STRING,
    Email: DataTypes.STRING,
    Nomor_HP: DataTypes.STRING,
    ID_Siswa: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Ortu;

(async()=>{
    await db.sync();
})();