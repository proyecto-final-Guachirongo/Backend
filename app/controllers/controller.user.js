import { pool } from "../config/mysqldb";
import { config } from "dotenv";
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
    const CLAVE = req.body.clave;
    const FECHA_NACIMIENTO = req.body.fecha_nacimiento;
    const CELULAR = req.body.celular;
    
    try {
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
    const CLAVE = req.body.clave;
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