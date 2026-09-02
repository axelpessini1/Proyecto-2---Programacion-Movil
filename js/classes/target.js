
class Target {
    constructor(title, description, image, precio) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.precio = precio;
    }

    createCard() {
        const contenedor = document.createElement('div');
        contenedor.className = 'producto';
        contenedor.innerHTML = `
            <a href="pages/producto.html">
                <img class="producto__imagen" src="${this.image}" alt="${this.title}">
                <div class="producto__informacion">
                    <p class="producto__nombre">${this.title}</p>
                    <p>${this.description}</p>
                    <p class="producto__precio">$${this.precio}</p>
                </div>
            </a>
        `;
        return contenedor;
    }
}
