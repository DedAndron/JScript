'use strict';
// var a;
// console.log(a);
// let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let monthNumber = Number(prompt("Enter a month number:"));
// switch(monthNumber){
//     case 1:
//         alert(month[0]);
//         break;
//     case 2:
//         alert(month[1]);
//         break;
//     case 3:
//         alert(month[2]);
//         break;
//     case 4:
//         alert(month[3]);
//         break;
//     case 5:
//         alert(month[4]);
//         break;
//     case 6:
//         alert(month[5]);
//         break;
//     case 7:
//         alert(month[6]);
//         break;
//     case 8:
//         alert(month[7]);
//         break;
//     case 9:
//         alert(month[8]);
//         break;
//     case 10:
//         alert(month[9]);
//         break;
//     case 11:
//         alert(month[10]);
//         break;
//     case 12:
//         alert(month[11]);
//         break;
//     default:
//         alert("Enter a valid month number");
// }
// let a = Number(prompt("Enter a number:"));
// let operator = prompt("Enter an operator (+, -, *, /):");
// let b = Number(prompt("Enter a number:"));
// switch(operator){
//     case "+":
//         alert(a+b);
//         break;
//     case "-":
//         alert(a-b);
//         break;
//     case "*":
//         alert(a*b);
//         break;
//     case "/":
//         if(b==0 || a==0){
//             alert("Cannot divide by zero");
//         }
//         else{
//             alert(a/b);
//         }
//         break;
//     default:
//         alert("Enter a valid operator");
// }
// let a = Number(prompt("Enter a number:"));
// let b = Number(prompt("Enter a number:"));
// let max = (a > b) ? a : b;
// alert(`The maximum number is: ${max}`);

// let c = Number(prompt("Enter a number:"));
// let result = (c % 5 == 0) ? "Multiple of 5" : "Not a multiple of 5";
// alert(`The number is: ${result}`);

// let planet = prompt("Enter a planet name:");
// let message = (planet.toLowerCase() == "earth") ? "Hi Earthling!" : "Hi Alien!";
// alert(message);
// let count = 0;
// let n;
// do{
//     n = 1000/2
//     count++;
// }
// while(n>50);
// alert(`Number of iterations: ${n} \nCount: ${count}`);

let min = Number(prompt("Enter a minimum number:"));
let max = Number(prompt("Enter a maximum  number:"));
let sum = 0;
for(let i=min; i<=max; i++){
    sum += i;
}
alert(`The sum of numbers from ${min} to ${max} is: ${sum}`);


let num = Number(prompt("Enter a number:"));
let divisors = [];
for(let i=1; i<=num; i++){
    if(num % i == 0){
        divisors.push(i);
    }
}
alert(`The divisors of ${num} are: ${divisors.join(", ")}`);

let number = 2;
let multiplier = 1;
do{
    do{
        alert(`${number} x ${multiplier} = ${number * multiplier}`);
        multiplier++;
    }
    while(multiplier <= 10);
    number++;
    multiplier = 1;
}
while(number <= 9);

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let response;
while(true){
    for(let i=0; i<days.length; i++){
        response = prompt(`${days[i]}. Do you want to see the days of the week? (yes/no)`);
        if(response.toLowerCase() !== "yes"){
            break;
        }
    }
    if(response.toLowerCase() !== "yes"){
        break;
    }
}

let choice;
while(true){
    let numberA = Number(prompt("Enter a number:"));
    let action = prompt("Enter an operator (+, -, *, /):");
    let numberB = Number(prompt("Enter a number:"));
    let result = 0;
    switch(action){
        case "+":
            result = numberA + numberB;
            choice = prompt(`The result is: ${result}. Do you want to perform another calculation? (yes/no)`);
            if(choice.toLowerCase() !== "yes"){
                break;
            }
        case "-":
            result = numberA - numberB;
            choice = prompt(`The result is: ${result}. Do you want to perform another calculation? (yes/no)`);
            if(choice.toLowerCase() !== "yes"){
                break;
            }
        case "*":
            result = numberA * numberB;
            choice = prompt(`The result is: ${result}. Do you want to perform another calculation? (yes/no)`);
            if(choice.toLowerCase() !== "yes"){
                break;
            }
        case "/":
            if(numberB == 0){
                alert("Cannot divide by zero");
                choice = prompt(`Do you want to perform another calculation? (yes/no)`);
                if(choice.toLowerCase() !== "yes"){
                    break;
                }
            }
    }
    if(choice.toLowerCase() !== "yes"){
        break;
    }
}

