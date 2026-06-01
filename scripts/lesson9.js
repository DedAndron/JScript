// let a = 100;
 
// f2();
 
// function f1() {
//   console.log(a);
// }
 
// function f2() {
//   let a = 200;
//   f1();
// }
 
//getElementById, querySelector, querySelectorAll
//getElementsByClassName, getElementsByTagName
//NodeList, HtmlCollection
 
//Події - events
//Події мишки click
const cl = console.log;
const block = document.getElementById("block");
const mainBlock = document.getElementById("main-block");
block.style.width = "300px";
block.style.height = "200px";
block.style.backgroundColor = "lime";
block.innerText = "Block-2";
block.style.color = "black";
block.style.fontSize = "36px";
 
block.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  block.style.backgroundColor = "red";
});
block.addEventListener("mouseenter", () => {
  block.style.backgroundColor = "yellow";
});
block.addEventListener("mouseleave", () => {
  block.style.backgroundColor = "lime";
});
// block.addEventListener("mousemove", (ev) => {
//   console.dir(ev);
// });
block.addEventListener("click", (e) => {
  //   e.stopPropagation();
  alert("Clicked");
});
mainBlock.addEventListener(
  "click",
  () => {
    cl("Block1");
  },
  //   { capture: true },
);
for (let i = 0; i < 150000; i++) {
  cl("He");
}