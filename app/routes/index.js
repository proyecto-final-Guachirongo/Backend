import { Router } from "express";
import rutaUser from "./routes.user";
import rutaProduct from "./routes.product";
// import swaggerUi from 'swagger-ui-express';
// import swaggerfile from '../tools/swagger-output.json' ;
const ruta = Router();

ruta.use("/api", rutaUser);
ruta.use("/api", rutaProduct);
// ruta.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerfile));


export default ruta;