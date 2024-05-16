// Controladores: Funciones que responden a nuestras rutas para autores.
const getAllAuthors = (req, res) => {
    res.send("Se recuperan todos los autores CONTROLLER");
}

const getAuthorById = (req, res) => {
    //req.params: datos dinamicos de la url (id):
    const { autor_id } = req.params;
    console.log(autor_id);
    res.send("Se recupera el autor por id");
}

const createAuthor = (req, res) => {
    console.log(req.body);
    res.send("Creamos un nuevo autor");
}


// Exports:
module.exports = {
    getAllAuthors, getAuthorById, createAuthor
}