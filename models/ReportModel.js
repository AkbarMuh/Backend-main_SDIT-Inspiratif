import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Report = db.define('report',{
    ID: DataTypes.STRING,
    jenis: DataTypes.STRING,
    nis: DataTypes.STRING,
    Nama_Prestasi: DataTypes.STRING,
    Keterangan_Prestasi	: DataTypes.STRING
},{
    freezeTableName:true
});

export default Report;

(async()=>{
    await db.sync();
})();