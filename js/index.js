document.addEventListener('DOMContentLoaded', new function () {
    const Grid = document.querySelector(".grid");

    const targets = [
        new Target("Hola", "asdasd", "img/1.jpg", 12),
        new Target("Hola", "asdasd", "img/1.jpg", 12),
        new Target("Hola", "asdasd", "img/1.jpg", 12)
    ];

    targets.forEach(targets => {
        Grid.appendChild(targets.createCard());
    })
});