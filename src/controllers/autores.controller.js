// Controladores: Funciones que responden a nuestras rutas para autores.

// Importar el modelo:
const Autores = require("../models/autores.model");

// --- OBTENCIÓN ---

// Obtener todos los autores:
const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await Autores.selectAll();
        res.status(200).json(result); 
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
        res.status(200).json(result[0]);
    } catch (err) {
        next(err);
    } 
}

// --- CREACIÓN ---

// Crear un nuevo autor:
const createAuthor = async (req, res, next) => {
    try {
        const { nombre, email, imagen } = req.body;

        // Verifica que todos los campos estén completos:
        if (!nombre || !email || !imagen) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        // Validación para evitar duplicación:
        const [authorExists] = await Autores.selectByEmail(email);
            if (authorExists.length > 0) {
                return res.status(409).json({ error: "El autor ya existe" });
            }

        const [result] = await Autores.insert(req.body);
            if (result.affectedRows === 0) {
                return res.status(500).json({ error: "Error al crear el autor" });
            }
        // Res: Datos del nuevo autor:
        const [[newAuthor]] = await Autores.selectById(result.insertId);
        res.status(201).json(newAuthor);
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
                return res.status(500).json({ error: "Error al actualizar el autor" });
            }
        res.status(200).json({ message: "Autor actualizado correctamente" });
    } catch (err) {
        next(err);
    }
}

// Eliminar un autor (Elimina sus posts en cascada):
const deleteAuthor = async (req, res, next) => {
    try {
        const [result] = await Autores.deleteById(req.params.autor_id);
            if (result.affectedRows === 0) {
                return res.status(500).json({ error: "Error al borrar el autor" });
            }
        res.status(200).json({ message: "Autor eliminado correctamente" });
    } catch (err) {
        next(err);
    }
}



// Exports:
module.exports = {
    getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor
}