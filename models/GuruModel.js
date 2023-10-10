import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Guru = db.define('guru',{
    Nama: DataTypes.STRING,
    NIK: DataTypes.STRING,
    Tempat_Tanggal_lahir: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Lulusan: DataTypes.STRING,
    Jurusan: DataTypes.STRING,
    Nama_Perguruan_Tinggi: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Guru;

(async()=>{
    await db.sync();
})();