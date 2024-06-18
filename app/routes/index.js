import { Router } from "express";
import rutaComputador from "./routes.product";
const ruta = Router();

ruta.use("/api", rutaComputador);

export default ruta;