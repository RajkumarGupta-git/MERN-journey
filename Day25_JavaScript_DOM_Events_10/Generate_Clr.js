let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();

    div.style.backgroundColor = randomColor;
    div.innerText = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}