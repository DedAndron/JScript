const div = document.createElement("div");
div.id = "container";
const languages = ["C++", "C#", "JS"];
languages.forEach(lang => {
    const p = document.createElement("p");
    p.textContent = lang;
    div.appendChild(p);
});
document.body.appendChild(div);
const button = document.createElement("button");
button.textContent = "Show";
button.addEventListener("click", () => {
    const newLanguage = prompt("Add a new programming language:");
    if (newLanguage && newLanguage.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = newLanguage;
        div.appendChild(p);
    }
});
document.body.appendChild(button);

const textBlock = document.getElementById("textBlock");
const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "black",
    "gray"
];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
textBlock.addEventListener("click", () => {
    textBlock.style.color = getRandomColor();
});