import { Router } from "express";
import rutaUser from "./routes.product";
const ruta = Router();

ruta.use("/api", rutaUser);

export default ruta;