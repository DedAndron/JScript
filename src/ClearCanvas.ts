class ClearCanvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    constructor() {
        this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
    }
    clear(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}
export default ClearCanvas;