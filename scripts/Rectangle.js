import Figure from "./Figure.js";
class Rectangle extends Figure {
    _length;
    _width;
    constructor(length, width) {
        super("Rectangle");
        this._length = length;
        this._width = width;
    }
    showInfo() {
        console.log("Length of the rectangle: " + this._length);
        console.log("Width of the rectangle: " + this._width);
    }
    area() {
        console.log("Area of the rectangle: " + (this._length * this._width));
    }
    perimeter() {
        console.log("Perimeter of the rectangle: " + (2 * (this._length + this._width)));
    }
}
export default Rectangle;