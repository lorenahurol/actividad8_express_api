// Controladores: Funciones que responden a nuestras rutas para posts.
const getAllPosts = (req, res) => {
    res.send("Se recuperan todos los posts");
}

const getPostById = (req, res) => {
    const { post_id } = req.params;
    console.log(post_id);
    res.send("Se recupera un post por Id");
}

// ** REVISAR ** //
const getPostsByAuthor = (req, res) => {
    const { autor_id } = req.body;
    console.log(autor_id);
    res.send("Recuperamos todos los posts de un autor");
}

const createPost = (req, res) => {
    console.log(req.body);
    console.log(req.currentDate);
    res.send("Se crea un nuevo post");
    
}

module.exports = {
    getAllPosts, createPost, getPostById, getPostsByAuthor
}