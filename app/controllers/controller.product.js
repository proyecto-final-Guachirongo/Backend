import { pool } from "../config/mysqldb";
import { config } from "dotenv";
config();

export const mostrar = async(req, res) => {

    try {
        const rest = await pool.query(`call SP_MOSTRAR();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const listar = async(req, res) => {
    let id = req.params['id']

    try {
        const rest = await pool.query(`call SP_LISTAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const crear = async(req, res) => {
    const marca = req.body.marca;
    const almacenamiento = req.body.almacenamiento;
    const ram = req.body.ram;

    try {
        const respuesta = await pool.query(`CALL SP_CREAR('${marca}', '${almacenamiento}', '${ram}');`);
        res.json({"respuesta": respuesta})
    } catch (err) {
        res.json({"error": err})
    }
};
export const modificar = async(req, res) => {
    const id = req.params.id;
    const marca = req.body.marca;
    const almacenamiento = req.body.almacenamiento;
    const ram = req.body.ram;

    try {
        const rest = await pool.query(`call SP_EDITAR(${id}, '${ram}', '${almacenamiento}', '${marca}');`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const eliminar = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_ELIMINAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};