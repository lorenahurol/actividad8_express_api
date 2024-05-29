// Funciones con las queries contra la tabla posts:
// Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define.

// Queries de obtención y creación:
const selectAll = () => {
    return db.query(`
        SELECT
            p.id AS post_id,
            p.titulo, p.descripcion, p.fecha_creacion, p.categoria,
            a.id AS autor_id, 
            a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
        ORDER BY p.id ASC
    `);
}

const selectById = (postId) => {
    return db.query(`
        SELECT
            p.id AS post_id,
            p.titulo, p.descripcion, p.fecha_creacion, p.categoria,
            a.id AS autor_id, 
            a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen 
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
        WHERE p.id = ?`,
        [postId]);
}

// Obtener todos los posts de un autor, junto con sus datos a través de su id:
const selectByAuthorId = (autorId) => {
    return db.query(`
        SELECT
            p.id AS post_id,
            p.titulo, p.descripcion, p.fecha_creacion, p.categoria,
            a.id AS autor_id, 
            a.nombre as autor_nombre, a.email as autor_email, a.imagen as autor_imagen
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
        WHERE a.id = ?`,
        [autorId]);

}

// Extra: selectByTitleAndAuthor para validacion (evitar insertar posts duplicados):
const selectByTitleAndAuthor = (postTitle, autorId) => {
    return db.query("SELECT * FROM posts WHERE titulo = ? AND FK_autor_id = ?", [postTitle, autorId]);
}

// Crear Post:
const insert = ({ titulo, descripcion, categoria, FK_autor_id }) => {
    return db.query(`
        INSERT INTO posts (titulo, descripcion, categoria, FK_autor_id)
        VALUES(?, ?, ?, ?)
    `, [titulo, descripcion, categoria, FK_autor_id]);
}

// Queries para actualizar y eliminar:
const updateById = (titulo, descripcion, categoria, postId) => {
    return db.query(`
        UPDATE posts
        SET titulo = ?, descripcion = ?, categoria = ?
        WHERE id = ?
    `, [titulo, descripcion, categoria, postId]);
}

const deleteById = (postId) => {
    return db.query(`
        DELETE FROM posts
        WHERE id = ?
    `, [postId]);
}

// Exports:
module.exports = {
    selectAll, selectById, selectByAuthorId, selectByTitleAndAuthor, insert, updateById, deleteById
}
    
