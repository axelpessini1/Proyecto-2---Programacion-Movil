document.addEventListener('DOMContentLoaded', new function () {
    const Grid = document.querySelector(".grid");

    const targets = [
        new Target("Hola", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna.....", "img/targets-producto/1.jpg", 12),
        new Target("Angular", "La mejor remera fachera que veras", "img/targets-producto/2.jpg", 12),
        new Target("React", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna.....", "img/targets-producto/3.jpg", 12),
        new Target("Redux", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna......", "img/targets-producto/4.jpg", 12),
        new Target("NodeJS", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna.....", "img/targets-producto/5.jpg", 12),
        new Target("Sass", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna.....", "img/targets-producto/6.jpg", 12),
        new Target("HTML5", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna.....", "img/targets-producto/7.jpg", 12),
        new Target("GitHub", "Lorem ipsum dolor sit amet consectetur adipiscing elit vivamus magna......", "img/targets-producto/8.jpg", 12),
        new Target("Bulma", "Lorem ipsum dolor elit vivamus magna.....", "img/targets-producto/9.jpg", 12)
    ];

    targets.forEach(targets => {
        Grid.appendChild(targets.createCard());
    })
});