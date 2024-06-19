import { Router } from "express";
import { crear, eliminar, listar, modificar, mostrar } from "../controllers/controller.product";

const rutaUser = Router();

rutaUser.get("/user", mostrar);
rutaUser.get("/user/:id", listar);
rutaUser.post("/user", crear);
rutaUser.put("/user", modificar);
rutaUser.delete("/user", eliminar);

export default rutaUser;