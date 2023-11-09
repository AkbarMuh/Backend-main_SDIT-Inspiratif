import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Siswa = db.define('siswa',{
    ID: DataTypes.STRING,
    name: DataTypes.STRING,
    NIS: DataTypes.STRING,
    NIK: DataTypes.STRING,
    No_KartuKeluarga: DataTypes.STRING,
    Tempat_TanggalLahir: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Tahun_MasukSDIT: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Siswa;

(async()=>{
    await db.sync();
})();