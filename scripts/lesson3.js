// const arr = ["Hello", "JavaScript", "World",  "Programming"];
// const sorted = arr.sort((a, b) => a.length - b.length);
// console.log(sorted);

// function f1 (el){
//     if(el[0] === "a" || el[0] === "A" || el[0] === "b" || el[0] === "B"){
//         return el;
//     }
//     return false;
// }

// const country = ["USA", "Canada", "Mexico", "Brazil", 
//     "Argentina", "Chile", "Colombia", "Peru", "Venezuela",
//     "Ecuador", "Bolivia", "Paraguay", "Uruguay", 
//     "Guyana", "Suriname", "French Guiana", "Belize", 
//     "Costa Rica", "El Salvador", "Guatemala", "Honduras",
//     "Nicaragua", "Panama", "Cuba", "Dominican Republic",
//     "Haiti", "Jamaica", "Trinidad and Tobago",
//     "Bahamas", "Barbados", "Saint Lucia", "Grenada",
//     "Saint Vincent and the Grenadines", 
//     "Antigua and Barbuda", 
//     "Saint Kitts and Nevis"];

// const filtered = country.filter(f1);
// console.log(filtered);
// const user = {
//     name: "John",
//     age: 30,
// }
// const a = "age";
// user.name = "Jane";
// user[a] = 25;
// user.country = "USA";
// console.table(user);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
// function f1 (acc, el) {
//     return acc * el;
// }
// const result = arr.reduce(f1, 1);
// console.log(result);

// function f2 (index) {
//     n = arr.findIndex((el => el === index));
//     arr.splice(n,1);
//     return arr;
// }
// console.log(f2(5));
// const n = "Hello";
// n.textSize = "20px";
// n.textColor = "red";

const car = {
    manufacturer: "BMW",
    model: "M5",
    year: 2022,
    averageSpeed: 100
  };
  function showCarInfo(carObject) {

    const info =
      "Manufacturer: " + carObject.manufacturer + "\n" +
      "Model: " + carObject.model + "\n" +
      "Year: " + carObject.year + "\n" +
      "Average Speed: " + carObject.averageSpeed + " km/h";

    alert(info);
  }
  function calculateTime(carObject, distance) {
    let time = distance / carObject.averageSpeed;
    let breaks = Math.floor(time / 4);
    let totalTime = time + breaks;
    return totalTime;
  }
  showCarInfo(car);

  let distance = 850;

  let result = calculateTime(car, distance);

  alert(
    "To cover " +
    distance +
    " km you need " +
    result.toFixed(2) +
    " hours"
  );
  const printMachine = {

    fontSize: "24px",
    fontColor: "blue",
    fontFamily: "Arial",

    print(text) {

      const message =
        "Font Size: " + this.fontSize + "\n" +
        "Font Color: " + this.fontColor + "\n" +
        "Font Family: " + this.fontFamily + "\n\n" +
        "Text: " + text;

      alert(message);
    }
  };
  setTimeout(function () {
    printMachine.print("Hello, this is a test of printMachine!");
  }, 5000);