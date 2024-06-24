import { Router } from "express";
import { crear, eliminar, listar, logUser, modificar, mostrar } from "../controllers/controllers.user";
import { verifyToken } from "../middlewares/oauth";

const rutaUser = Router();

rutaUser.get("/user", mostrar);
rutaUser.get("/user/:id", listar);
rutaUser.post("/user", crear);
rutaUser.put("/user", verifyToken, modificar);
rutaUser.delete("/user", verifyToken, eliminar);
rutaUser.post("/login", logUser);

export default rutaUser;