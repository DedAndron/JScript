class ClearCanvas {
    canvas;
    ctx;
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    clear(canvas, ctx) {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}
export default ClearCanvas;
//# sourceMappingURL=ClearCanvas.js.map