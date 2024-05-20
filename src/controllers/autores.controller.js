// Controladores: Funciones que responden a nuestras rutas para autores.

// Importar el modelo:
const Autores = require("../models/autores.model");

const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await Autores.selectAll();
        res.json(result); 
    } catch (err) {
        next(err);
    } 
}

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

const createAuthor = async (req, res) => {
    // *** REVISAR *** //
    try {
        const [result] = await Autores.insert(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
    
}


// Exports:
module.exports = {
    getAllAuthors, getAuthorById, createAuthor
}