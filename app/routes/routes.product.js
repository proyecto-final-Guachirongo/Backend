import { Router } from "express";
import { crear, eliminar, listar, modificar, mostrar } from "../controllers/controller.product";

const rutaProduct = Router();

rutaProduct.get("/product", mostrar);
rutaProduct.get("/product/:id", listar);
rutaProduct.post("/product", crear);
rutaProduct.put("/product", modificar);
rutaProduct.delete("/product", eliminar);

export default rutaProduct;