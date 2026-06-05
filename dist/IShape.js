const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
class Rectangle {
    draw(brush) {
        if (ctx) {
            ctx.beginPath();
            ctx.rect(50, 50, 100, 100);
            ctx.strokeStyle = brush.color;
            ctx.lineWidth = brush.lineWidth;
            ctx.stroke();
        }
    }
}
class Square {
    draw(brush) {
        if (ctx) {
            ctx.beginPath();
            ctx.rect(200, 50, 100, 100);
            ctx.strokeStyle = brush.color;
            ctx.lineWidth = brush.lineWidth;
            ctx.stroke();
        }
    }
}
class Circle {
    draw(brush) {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(150, 150, 50, 0, 2 * Math.PI, false);
            ctx.strokeStyle = brush.color;
            ctx.lineWidth = brush.lineWidth;
            ctx.stroke();
        }
    }
}
class Triangle {
    draw(brush) {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(200, 50);
            ctx.lineTo(250, 150);
            ctx.lineTo(150, 150);
            ctx.closePath();
            ctx.strokeStyle = brush.color;
            ctx.lineWidth = brush.lineWidth;
            ctx.stroke();
        }
    }
}
export { Rectangle, Square, Circle, Triangle };
//# sourceMappingURL=IShape.js.map