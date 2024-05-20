// Funciones con las queries contra la tabla autores.

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

// Exports:
module.exports = {
    selectAll, selectById, insert
}