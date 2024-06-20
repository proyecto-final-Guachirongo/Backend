import express from "express";
import ruta from "./routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/", ruta);
app.use(cors())

export default app;