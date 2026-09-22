function buscarEventos(eventos, texto) {
    return eventos.filter(evento =>
        evento.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        evento.ciudad.toLowerCase().includes(texto.toLowerCase()) ||
        evento.categoria.toLowerCase().includes(texto.toLowerCase())
    );
}

function filtrarPorCiudad(eventos, ciudad) {
    return eventos.filter(evento =>
        evento.ciudad.toLowerCase() === ciudad.toLowerCase()
    );
}

function filtrarPorCategoria(eventos, categoria) {
    return eventos.filter(evento =>
        evento.categoria.toLowerCase() === categoria.toLowerCase()
    );
}

function obtenerEventoPorId(eventos, id) {
    return eventos.find(evento => evento.id === id);
}

export {
    buscarEventos,
    filtrarPorCiudad,
    filtrarPorCategoria,
    obtenerEventoPorId
};
