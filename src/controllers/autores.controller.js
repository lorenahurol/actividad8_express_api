// Controladores: Funciones que responden a nuestras rutas para autores.

// Importar el modelo:
const Autores = require("../models/autores.model");

// --- OBTENCIÓN ---

// Obtener todos los autores:
const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await Autores.selectAll();
        res.json(result); 
    } catch (err) {
        next(err);
    } 
}

// Obtener un autor por su ID:
const getAuthorById = async (req, res, next) => {
    try {
        //req.params: datos dinamicos de la url (id);
        const [result] = await Autores.selectById(req.params.autor_id);
        if (result.length === 0) {
        return res.status(404).json({
            error: "Autor no encontrado"
            })
        }
        res.json(result[0]);
    } catch (err) {
        next(err);
    } 
}

// --- CREACIÓN ---

// Crear un nuevo autor:
const createAuthor = async (req, res, next) => {
    try {
        const [result] = await Autores.insert(req.body);
        // Res: Datos del nuevo autor:
        const [[newAuthor]] = await Autores.selectById(result.insertId);
        res.json(newAuthor);
    } catch (err) {
        next(err);
    }
}


// --- Extras para CRUD completo - ACTUALIZACIÓN Y BORRADO --- 

// Actualizar un autor:
const updateAuthor = async (req, res, next) => {
    try {
        const { nombre, email, imagen } = req.body;

        const [result] = await Autores.updateById( nombre, email, imagen, req.params.autor_id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "El autor indicado no existe" });
        }
        res.json({ message: "Autor actualizado correctamente" });
    } catch (err) {
        next(err);
    }
}

// Eliminar un autor (Elimina sus posts en cascada):
const deleteAuthor = async (req, res, next) => {
    try {
        const [result] = await Autores.deleteById(req.params.autor_id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "El autor indicado no existe" });
            }
        res.json({ message: "Autor eliminado correctamente" });
    } catch (err) {
        next(err);
    }
}



// Exports:
module.exports = {
    getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor
}