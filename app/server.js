import express from "express";
import ruta from "./routes";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan("dev"));
app.use("/", ruta);

export default app;