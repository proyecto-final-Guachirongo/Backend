import { Router } from "express";
import { crear, eliminar, listar, modificar, mostrar } from "../controllers/controller.product";

const rutaComputador = Router();

rutaComputador.get("/pc", mostrar);
rutaComputador.get("/pc/:id", listar);
rutaComputador.post("/pc", crear);
rutaComputador.put("/pc/:id", modificar);
rutaComputador.delete("/pc/:id", eliminar);

export default rutaComputador;