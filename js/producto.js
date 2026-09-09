document.addEventListener('DOMContentLoaded', () => {
    const datosProducto = new URLSearchParams(window.location.search);
    const titulo = datosProducto.get('title');
    const descripcion = datosProducto.get('description');
    const imagen = datosProducto.get('image');
    const precio = datosProducto.get('precio');

    if (!titulo || !descripcion || !imagen || !precio) {
        return;
    }

    const imagenProducto = document.querySelector('#producto-imagen');
    imagenProducto.src = `../${imagen}`;
    imagenProducto.alt = titulo;
    document.querySelector('#producto-titulo').textContent = titulo;
    document.querySelector('#producto-precio').textContent = `$${precio}`;
    document.querySelector('#producto-descripcion').textContent = descripcion;
});