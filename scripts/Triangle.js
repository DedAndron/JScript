import Figure from "./Figure.js";
class Triangle extends Figure {
    _base;
    _height;
    constructor(base, height) {
        super("Triangle");
        this._base = base;
        this._height = height;
    }
    showInfo() {
        console.log("Base of the triangle: " + this._base);
        console.log("Height of the triangle: " + this._height);
    }
    area() {
        console.log("Area of the triangle: " + (0.5 * this._base * this._height));
    }
    perimeter() {
        console.log("Perimeter of the triangle: " + (this._base + this._height + Math.sqrt(this._base * this._base + this._height * this._height)));
    }
}
export default Triangle;