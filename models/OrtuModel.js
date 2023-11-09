import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Ortu = db.define('ortu',{
    ID: DataTypes.STRING,
    Jenis: DataTypes.STRING,
    nama: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    pendapatan: DataTypes.STRING,
    Lulusan: DataTypes.STRING,
    ID_Siswa: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Ortu;

(async()=>{
    await db.sync();
})();