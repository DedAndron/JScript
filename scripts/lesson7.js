let show = true;

const showhidebutton = document.getElementsByClassName("show-hide-btn")[0];
const content = document.getElementsByClassName("show")[0];
showhidebutton.addEventListener("click", () => {
  show = !show;
  if (!show) {
    content.classList.remove("active");
  } else {
    content.classList.add("active");
  }
});

const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {

      button.addEventListener("click", () => {

        buttons.forEach(btn => {
          btn.classList.remove("active");
        });

        contents.forEach(content => {
          content.classList.remove("active");
        });

        button.classList.add("active");

        const tabId = button.dataset.tab;

        document
          .getElementById(tabId)
          .classList.add("active");
      });

    });

// const colors = ["yellow", "blue", "orange", "black", "green", "gray", "red"];
// const box = document.getElementById("box");

// let intervalId = null;

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// box.addEventListener("click", () => {
//   box.style.background = getRandomColor();
//   if (intervalId) return;
//   intervalId = setInterval(() => {
//     box.style.background = getRandomColor();
//   }, 1000);
// });
// Реалізуйте клас, який описує простий маркер. Клас має містити наступні компо­ненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил в маркері (в процентах);
// метод для друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться, доки в маркері є чорнила; один не пробільний символ — це 0,5% чорнил в маркері).
// Реалізуйте клас, який описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструйте роботу написаних методів.

// class Marker {
//   constructor(color, inkLevel = 100) {
//     this.color = color;
//     this.inkLevel = inkLevel;
//   }
//    write(text) {
//     let result = "";
//     for (let char of text) {
//       if (this.inkLevel <= 0) {
//         break;
//       }
//       result += char;
//       if (char !== " " && char !== "\n") {
//         this.inkLevel -= 0.5;
//       }
//     }
//     let inkLevelLeft = this.inkLevel > 0 ? `${this.inkLevel}%` : "empty";
//     console.log(`%c${result}`,`color: ${this.color}`);
//     console.log(`Remaining ink: ${inkLevelLeft}`);
//   }
// }

// let marker = new Marker("red", 100);
// marker.write(`The ceaseless hum of the city was a lullaby to some, a relentless cacophony to others.
//   \nElara, however, found a peculiar solace in its rhythmic pulse.
//   \nIt was a constant reminder of the unseen forces at play, the millions of lives intersecting and diverging, each a tiny thread in the grand tapestry of existence.
//   \nShe traced the condensation on her windowpane, the cool glass a stark contrast to the anxious warmth in her chest.
//   Tonight felt different, a subtle shift in the atmospheric pressure, a premonition that whispered of change.`);

// //Реалізуйте клас Employee, що описує працівника, і створіть масив працівників банку.
// // Реалізуйте клас EmpTable для генерації HTML-код таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml().
// // Створіть об'єкт класу EmpTable та виведіть на екран результат роботи методу getHtml().

// class Employee{
//   constructor(name, surname){
//     this.name = name;
//     this.surname = surname;
//   }
// }
// class EmpTable{
//   constructor(employeesList){
//     this.employeesList = employeesList;
//   }
//   getHtml() {

//     let html = `
//       <table border="1" cellpadding="10">
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//         </tr>
//     `;
//     let i=1;
//     for (const employee of this.employeesList) {

//       html += `
//         <tr>
//           <td>${i++}</td>
//           <td>${employee.name} ${employee.surname}</td>
//         </tr>
//       `;
//     }

//     html += `</table>`;

//     return html;
//   }
// }
// const employees = [
//   new Employee("Anna","Burova"),
//   new Employee("Andrew","Ktotov"),
//   new Employee("Victor","Ryaznikov"),
//   new Employee("Elizabet","Winterborn"),
//   new Employee("Bruno","Karezas"),
//   new Employee("Artur","Gavrik"),
//   new Employee("Jhon","Goldenborn"),
//   new Employee("Konrad","Kon"),
//   new Employee("Lily","Flower"),
//   new Employee("Layce","Layce"),
//   new Employee("Victoria","Greyson"),
// ]
// const table = new EmpTable(employees)
// document.body.innerHTML = table.getHtml();
