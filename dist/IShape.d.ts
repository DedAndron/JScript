import Brush from './Brush.js';
interface IShape {
    draw(brush: Brush): void;
}
declare class Rectangle implements IShape {
    draw(brush: Brush): void;
}
declare class Square implements IShape {
    draw(brush: Brush): void;
}
declare class Circle implements IShape {
    draw(brush: Brush): void;
}
declare class Triangle implements IShape {
    draw(brush: Brush): void;
}
export default IShape;
export { Rectangle, Square, Circle, Triangle };
//# sourceMappingURL=IShape.d.ts.map