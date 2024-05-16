// Controladores: Funciones que responden a nuestras rutas para autores.
const getAllAutores = (req, res) => {
    res.send("Se recuperan todos los autores CONTROLLER");
}

const getAutorById = (req, res) => {
    res.send("Se recupera el autor por id");
}

const createAutor = (req, res) => {
    res.send("Creamos un nuevo autor");
}


// Exports:
module.exports = {
    getAllAutores, getAutorById, createAutor
}