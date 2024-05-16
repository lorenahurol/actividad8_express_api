// Controladores: Funciones que responden a nuestras rutas para posts.
const getAllPosts = (req, res) => {
    res.send("Se recuperan todos los posts");
}
/*
// GET post by Autor_id? 
*/

const createPost = (req, res) => {
    res.send("Se crea un nuevo post");
}

module.exports = {
    getAllPosts, createPost
}