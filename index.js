import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import GuruRoute from "./routes/GuruRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(GuruRoute)

app.listen(5000, ()=> console.log('Server up and running...'));