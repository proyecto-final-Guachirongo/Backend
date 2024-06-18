import express from "express";
import ruta from "./routes";
const app = express();

app.use("/", ruta);
app.use(express.json());

export default app;