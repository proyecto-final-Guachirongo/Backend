import { pool } from "../config/mysqldb";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
config();

export const mostrar = async(req, res) => {

    try {
        const rest = await pool.query(`call SP_MOSTRARU();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const listar = async(req, res) => {
    let id = req.params['id']

    try {
        const rest = await pool.query(`call SP_LISTARU(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const crear = async(req, res) => {
    const NOMBRE = req.body.nombre;
    const APELLIDO = req.body.apellido;
    const CORREO = req.body.correo;
    const DOCUMENTO = req.body.documento;
    const CLAVESC = req.body.clave;
    const FECHA_NACIMIENTO = req.body.fecha_nacimiento;
    const CELULAR = req.body.celular;
    
    try {
        const hash = await bcrypt.hash(CLAVESC, 2);
        const CLAVE = hash;
        const respuesta = await pool.query(`CALL SP_CREARU ('${NOMBRE}', '${APELLIDO}', '${CORREO}', '${DOCUMENTO}', '${CLAVE}', '${FECHA_NACIMIENTO}', '${CELULAR}');`);
        res.json({"respuesta": respuesta})
    } catch (err) {
        res.json({"error": err})
    }
};
export const modificar = async(req, res) => {
    const ID = req.body.id
    const NOMBRE = req.body.nombre;
    const APELLIDO = req.body.apellido;
    const CORREO = req.body.correo;
    const DOCUMENTO = req.body.documento;
    const CLAVESC = req.body.clave;
    const CLAVE = CLAVESC;
    const FECHA_NACIMIENTO = req.body.fecha_nacimiento;
    const CELULAR = req.body.celular;

    try {
        const rest = await pool.query(`call SP_MODIFICARU('${ID}' ,'${NOMBRE}', '${APELLIDO}', '${CORREO}', '${DOCUMENTO}', '${CLAVE}', '${FECHA_NACIMIENTO}', '${CELULAR}');`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const eliminar = async(req, res) => {
    const id = req.body.id

    try {
        const rest = await pool.query(`call SP_ELIMINARU(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};

export const logUser = async(req, res) =>{
    const{NOMBRE, CLAVE} = req.body;
    const hash = await bcrypt.hash(CLAVE, 2);
    try {
        const respuesta = await pool.query(`CALL SP_BUSCARU('${NOMBRE}')`);
        if (respuesta[0][0] == 0) {
            error(req, res, 404, "Usuario no existe");
            return;
        }
        const match = await bcrypt.compare(CLAVE, respuesta[0][0][0].CLAVE)
        if (!match) {
            error(req, res, 401, "No está autorizado")
        }

        let payload = {
            "usuario": NOMBRE,
            "nombre": respuesta[0][0][0].NOMBRE
        };

        let token = await jwt.sign(payload, 
            process.env.TOKEN_PRIVATEKEY, 
            {
                expiresIn: process.env.TOKEN_EXPIRES_IN
            }) ;

        success(req, res, 200, {token});


    } catch (err) {
        error(req, res, 500, "Error en el servidor, por favor intente de nuevo");

    }
}