import Figure from "./Figure.js";
class Square extends Figure {
    _side;
    constructor(side) {
        super("Square");
        this._side = side;
    }
    showInfo() {
        console.log("Side of the square: " + this._side);
    }
    area() {
        console.log("Area of the square: " + (this._side * this._side));
    }
    perimeter() {
        console.log("Perimeter of the square: " + (4 * this._side));
    }
}
export default Square;