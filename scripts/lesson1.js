// let a = Number(prompt("Entrer a number:"));
// let b = Number(prompt("Entrer a number:"));

// if (typeof(a)=='object')
// if(isNaN(a) || isNaN(b)){
//     alert("Please enter a valid number");
// }
// else{
//     alert(a+b);
// }
// console.log(2+4);

let name = prompt("What is your name?");
alert("Hello " + name);

let year = Number(prompt("What year were you born?"));
let age = 2026 - year;
alert("You are " + age + " years old.");

let a = Number(prompt("Enter the side of the square:"));
alert("The perimeter of the square is " + 4 * a);

let radius = Number(prompt("Enter the radius of the circle:"));
alert("The area of the circle is " + Math.PI * radius * radius);

let distance = Number(prompt("Enter the distance in kilometers:"));
let time = Number(prompt("Enter the time in hours:"));
alert("The speed is " + distance / time + " km/h");