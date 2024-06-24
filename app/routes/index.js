import { Router } from "express";
import rutaUser from "./routes.user";
import rutaProduct from "./routes.product";
const ruta = Router();

ruta.use("/api", rutaUser);
ruta.use("/api", rutaProduct);

export default ruta;