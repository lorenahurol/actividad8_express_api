// Funciones con las queries contra la tabla autores.

const selectAll = () => {
    // Retorna la promesa:
    return db.query("SELECT * FROM autores");
}

const selectById = (autorId) => {
    return db.query("SELECT * FROM autores WHERE id = ?", [autorId]);
}


// Exports:
module.exports = {
    selectAll, selectById
}