import Artist from "./Artist.js";
import { Rectangle, Square, Circle, Triangle } from "./IShape.js";
const artist = new Artist();
const shapes = [new Rectangle(), new Square(), new Circle(), new Triangle()];
while (true) {
    artist.paint(shapes);
}
//# sourceMappingURL=lesson16.js.map