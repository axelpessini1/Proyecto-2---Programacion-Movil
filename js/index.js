document.addEventListener('DOMContentLoaded', () => {

    const clote1 = new Target("Camisa de Algodón", "Camisa de algodón suave y cómoda, perfecta para el uso diario.", "img/1.jpg", 29.99);
    document.querySelector('.grid').appendChild(clote1.createCard());

    const clothes = [
    ];

    clothes.forEach(clothe => {
        document.querySelector('.grid').appendChild(clothe.createCard());
    });

});