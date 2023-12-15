import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import SiswaRoute from "./routes/SiswaRoute.js";
import GuruRoute from "./routes/GuruRoute.js";
import OrtuRoute from "./routes/OrtuRoute.js";
import LoginRoute from "./routes/LoginRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import ListRoute from "./routes/ListRoute.js";
import SearchLoginRoute from "./routes/Search/SearchLoginRoute.js"
import SearchOrtuRoute from "./routes/Search/SearchOrtuRoute.js"
import SearchSiswaRoute from "./routes/Search/SearchSiswaRoute.js"
import SearchGuruRoute from './routes/Search/SearchGuruRoute.js';
import SearchKelasRoute from './routes/Search/SearchKelasRoute.js';
import dashboard from "./routes/Dashboard.js"



const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(SiswaRoute);
app.use(GuruRoute);
app.use(OrtuRoute);
app.use(KelasRoute);

app.use('/List',ListRoute)
app.use('/cariGuru',SearchGuruRoute);
app.use('/cariOrtu',SearchOrtuRoute);
app.use('/cariSiswa',SearchSiswaRoute);
app.use('/cariKelas',SearchKelasRoute);

app.use('/auth',LoginRoute);
app.use('/cari',SearchLoginRoute);
app.use('/dashboard',dashboard)

app.get('/',(req, res)=>{console.log('/'); res.send("Hello aku home");});



app.listen(3000, ()=> console.log('Server up and running...'));