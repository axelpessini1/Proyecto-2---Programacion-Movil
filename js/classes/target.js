
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
        const productoUrl = `pages/producto.html?title=${encodeURIComponent(this.title)}&description=${encodeURIComponent(this.description)}&image=${encodeURIComponent(this.image)}&precio=${encodeURIComponent(this.precio)}`;
        contenedor.innerHTML = `
            <a href="${productoUrl}">
                <img class="producto__imagen" src="${this.image}" alt="${this.title}">
                <div class="producto__informacion">
                    <p class="producto__nombre">${this.title}</p>
                    <p>${this.description}</p>
                    <p class="producto__precio">$${this.precio}</p>
                </div>
            </a>
            
            <a class="producto__comprar" href="${productoUrl}">
                <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle; margin-right: 0.2rem;">
                    shopping_cart
                </span>
                Comprar
            </a>
        `;
        return contenedor;
    }
}
