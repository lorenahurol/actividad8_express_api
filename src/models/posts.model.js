// Funciones con las queries contra la tabla posts:
// Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define.

const selectAll = () => {
    return db.query(`
        SELECT p.*, a.* 
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
    `);
}

const selectById = (postId) => {
    return db.query(`
        SELECT p.*, a.*
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
        WHERE p.id = ?`,
        [postId]);
}

// Obtener todos los posts de un autor, junto con sus datos a través de su id:
const selectByAuthorId = (autorId) => {
    return db.query(`
        SELECT p.*, a.*
        FROM posts AS p
        INNER JOIN autores AS a
        ON p.FK_autor_id = a.id
        WHERE a.id = ?`,
        [autorId]);

}

// Crear Post:
const insert = ({ titulo, descripcion, categoria, FK_autor_id }) => {
    return db.query(`
        INSERT INTO posts (titulo, descripcion, categoria, FK_autor_id)
        VALUES(?, ?, ?, ?)
    `, [titulo, descripcion, categoria, FK_autor_id]);
}


// Exports:
module.exports = {
    selectAll, selectById, selectByAuthorId, insert
}
    
