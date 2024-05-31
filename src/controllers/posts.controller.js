// Controladores: Funciones que responden a nuestras rutas para posts.

// Importar el modelo de Posts:
const Posts = require("../models/posts.model");

// --- OBTENCIÓN ---
// Obtener todos los posts:
const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await Posts.selectAll();
        res.status(200).json(result);
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
            res.status(200).json(result[0]);
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
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

// --- CREACIÓN ---
// Crear un nuevo post:
const createPost = async (req, res, next) => {
    try {
        // Extraer los datos necesarios de req.body:
        const { titulo, descripcion, categoria, FK_autor_id } = req.body;

        // Verifica que todos los campos estén completos:
        if (!titulo || !descripcion || !categoria || !FK_autor_id) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        // Validación para evitar duplicados:
        const [postExists] = await Posts.selectByTitleAndAuthor(titulo, FK_autor_id);
            if (postExists.length > 0) {
                return res.status(409).json({ error: "Error al crear el post. Prueba con un título o autor diferente" });
            }
       
        const [result] = await Posts.insert({ titulo, descripcion, categoria, FK_autor_id });
            if (result.affectedRows === 0) {
                return res.status(500).json({
                    error: "Error al crear el post"
                })
            }
        // Res: Datos del nuevo post:
        const [[newPost]] = await Posts.selectById(result.insertId);
        res.status(201).json(newPost);
    } catch (err) {
        next(err);
    }  
}

// --- Extras para CRUD completo - ACTUALIZACIÓN Y BORRADO ---
// Actualizar un post:
const updatePost = async (req, res, next) => {
    try {
        const { titulo, descripcion, categoria } = req.body;
        const postId = req.params.post_id;

        const [result] = await Posts.updateById(titulo, descripcion, categoria, postId);
            if (result.affectedRows === 0) {
                return res.status(500).json({ error: "Error al actualizar el post" });
            }
        res.status(200).json({ message: "Post actualizado correctamente"});
    } catch (err) {
        next(err);
    }
}

// Eliminar un post:
const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.post_id;

        const [result] = await Posts.deleteById(postId);
            if (result.affectedRows === 0) {
                    return res.status(500).json({ error: "Error al eliminar el post" });
        }
        res.status(200).json({ message: "Post eliminado correctamente "})      
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllPosts, createPost, getPostById, getPostsByAuthor, updatePost, deletePost
}