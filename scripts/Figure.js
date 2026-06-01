class Figure{
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    showInfo() {
        console.log("This is a figure.");
    }
    area() {
        console.log("Area of the figure.");
    }
    perimeter() {
        console.log("Perimeter of the figure.");
    }
}
export default Figure;
