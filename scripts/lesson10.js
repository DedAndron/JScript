const div = document.createElement("div");
div.id = "container";
const colors = ["red", "green", "blue", "orange", 
    "purple", "black", "gray", "yellow", 
    "pink", "cyan", "magenta", "lime", 
    "teal", "navy", "maroon", "olive", 
    "silver", "gold", "bronze", "coral", 
    "indigo", "violet", "turquoise", "tan", 
    "salmon", "plum", "orchid", "crimson", 
    "khaki", "lavender", "peru", "sienna", 
    "slateblue", "steelblue", "mediumseagreen", 
    "mediumslateblue", "mediumturquoise", 
    "mediumvioletred", "midnightblue", 
    "mintcream", "mistyrose", "moccasin", 
    "navajowhite", "oldlace", "olivedrap", 
    "orange", "orangered", "orchid", "palegoldenrod", 
    "palegreen", "paleturquoise", "palevioletred", 
    "papayawhip", "peachpuff", "peru", "pink", "plum",
    "powderblue", "purple", "rebeccapurple", 
    "rosybrown", "royalblue", "saddlebrown", 
    "salmon", "sandybrown", "seagreen", 
    "seashell", "sienna", "skyblue", 
    "slateblue", "slategray", "snow", 
    "springgreen", "steelblue", "tan", 
    "thistle", "tomato", "transparent", "turquoise"];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function createBlock() {
    const block = document.createElement("div");
    block.style.width = "100px";
    block.style.height = "100px";
    block.style.backgroundColor = getRandomColor();
    block.style.display = "inline-block";
    block.style.margin = "5px";
    div.appendChild(block);
    block.addEventListener("click", () => {
        removeBlock(block);
    });
}
document.body.appendChild(div);
for (let i = 0; i < 10; i++) {
    createBlock();
}
const button = document.createElement("button");
button.textContent = "Create Block";
button.addEventListener("click", createBlock);
document.body.appendChild(button);
function removeBlock(block) {
    block.remove();
}