document.addEventListener('DOMContentLoaded', new function () {
    const Grid = document.querySelector(".grid");

    const targets = [
        new Target("Hola", "asdasd", "img/targets-producto/1.jpg", 12),
        new Target("Angular", "La mejor remera fachera que veras", "img/targets-producto/2.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12),
        new Target("React", "asdasd", "img/targets-producto/3.jpg", 12)
    ];

    targets.forEach(targets => {
        Grid.appendChild(targets.createCard());
    })
});