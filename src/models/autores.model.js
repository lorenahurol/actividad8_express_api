// Funciones con las queries contra la tabla autores.

// Queries de obtención y creación:
const selectAll = () => {
    // Retorna la promesa:
    return db.query("SELECT * FROM autores");
}

const selectById = (autorId) => {
    return db.query("SELECT * FROM autores WHERE id = ?", [autorId]);
}

const insert = ({ nombre, email, imagen }) => {
    return db.query("INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)", [nombre, email, imagen]);

}

// Queries para actualizar y eliminar:
const updateById = ( nombre, email, imagen, autorId ) => {
    return db.query("UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?", [nombre, email, imagen, autorId]);
}

const deleteById = (autorId) => {
    return db.query("DELETE FROM autores WHERE id = ?", [autorId]);
}

// Exports:
module.exports = {
    selectAll, selectById, insert, updateById, deleteById
}