import Figure from "./Figure.js";
import Square from "./Square.js";
import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
const cl = console.log;
const user = {
    name: "Andron",
};
cl(user);
cl(user.hasOwnProperty("name"));
const square = new Square(5);
cl(square._name);
square.showInfo();
square.area();
square.perimeter();
const rectangle = new Rectangle(5, 10);
cl(rectangle._name);
rectangle.showInfo();
rectangle.area();
rectangle.perimeter();
const triangle = new Triangle(5, 10);
cl(triangle._name);
triangle.showInfo();
triangle.area();
triangle.perimeter();