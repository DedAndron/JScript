import Artist from "./Artist.js";
import IShape from "./IShape.js";
import { Rectangle, Square, Circle, Triangle } from "./IShape.js";

const artist = new Artist();
const shapes: IShape[] = [new Rectangle(), new Square(), new Circle(), new Triangle()];
artist.paint(shapes);
