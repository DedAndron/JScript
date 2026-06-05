import Brush from "./Brush.js";
import IShape from "./IShape.js";
import ClearCanvas from "./ClearCanvas.js";
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const clearCanvas = new ClearCanvas();
class Artist {

    paint(shape:IShape[]) {
        alert("What a shape you want to paint? I will do it for you!");
        let choice = prompt("Enter the shape you want to paint (rectangle, square, circle, triangle):");
        alert("What color do you want to use?");
        let color = prompt("Enter the color you want to use:") ?? "";
        alert("What line width do you want to use?");
        let lineWidthInput = prompt("Enter the line width you want to use:");
        let lineWidth = parseInt(lineWidthInput ?? "1", 10);
        const brush: Brush = { color, lineWidth };
        switch (choice?.toLowerCase()) {
            case "rectangle":
                shape[0]?.draw(brush);
                canvas.addEventListener('click', () => clearCanvas.clear(canvas, ctx));
            case "square":
                shape[1]?.draw(brush);
                canvas.addEventListener('click', () => clearCanvas.clear(canvas, ctx));
            case "circle":
                shape[2]?.draw(brush);
                canvas.addEventListener('click', () => clearCanvas.clear(canvas, ctx));
            case "triangle":
                shape[3]?.draw(brush);
                canvas.addEventListener('click', () => clearCanvas.clear(canvas, ctx));
        }
    }
}

export default Artist;