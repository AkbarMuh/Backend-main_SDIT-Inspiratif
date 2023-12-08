import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kelas = db.define('kelas',{
    Grade_Kelas: DataTypes.STRING,
    WaliKelas: DataTypes.STRING,
    NamaKelas: DataTypes.STRING,
    Tahun_Masuk: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kelas;

(async()=>{
    await db.sync();
})();