// Controladores: Funciones que responden a nuestras rutas para autores.

// Importar el modelo:
const Autores = require("../models/autores.model");

const getAllAuthors = async (req, res) => {
    try {
        const [result] = await Autores.selectAll();
        res.json(result); 
    } catch (error) {
        res.status(500).json({ error: err.message });
    } 
}

const getAuthorById = async (req, res) => {
    //req.params: datos dinamicos de la url (id);
    const [result] = await Autores.selectById(req.params.autor_id);
    res.json(result);
    
}

const createAuthor = (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("Creamos un nuevo autor");
}


// Exports:
module.exports = {
    getAllAuthors, getAuthorById, createAuthor
}