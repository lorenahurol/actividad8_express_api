// Controladores: Funciones que responden a nuestras rutas para posts.

// Importar el modelo de Posts:
const Posts = require("../models/posts.model");

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await Posts.selectAll();
        res.json(result);
    } catch (err) {
        next(err);
    }
}

// Obtener post por ID:
const getPostById = async (req, res, next) => {
    try {
        const [result] = await Posts.selectById(req.params.post_id);
            if (result.length === 0) {
                return res.status(404).json({
                    error: "Post no encontrado"
                })
            }
            res.json(result[0]);
        } catch (err) {
            next(err);
        }
}

// Obtener todos los posts de un autor a través de su ID:
const getPostsByAuthor = async (req, res, next) => {
    try {
        const [result] = await Posts.selectByAuthorId(req.params.autor_id);
            if (result.length === 0) {
                return res.status(404).json({
                    error: "No se encuentran posts para ese autor"
                })
            }
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const createPost = async (req, res, next) => {
    try {
        // Extraer los datos necesarios de req.body:
        const { titulo, descripcion, categoria, FK_autor_id } = req.body;
        const [result] = await Posts.insert({ titulo, descripcion, categoria, FK_autor_id });
        // Res: Datos del nuevo post:
        const [[newPost]] = await Posts.selectById(result.insertId);
        res.json(newPost);
    } catch (err) {
        next(err);
    }
    
}

module.exports = {
    getAllPosts, createPost, getPostById, getPostsByAuthor
}