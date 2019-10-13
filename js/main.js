"use strict";
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var cw = window.innerWidth;
var ch = window.innerHeight;
var poleLeft = 0.25;
var poleMiddle = 0.5;
var poleRight = 0.75;
var poleBaseHeight = 0.66;
canvas.height = ch;
canvas.width = cw;
document.body.appendChild(canvas);
function draw() {
    var baseRad = { tl: 10, tr: 10, bl: 10, br: 10 };
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'black';
    roundRect(ctx, poleLeft * cw - (0.1 * cw), poleBaseHeight * ch, (poleRight - poleLeft) * cw + (0.1 * cw), 0.03 * ch, baseRad);
    requestAnimationFrame(draw);
}
function play() {
}
play.rate = 10;
draw();
play.interval = setInterval(play, 1000 / play.rate);
window.addEventListener("resize", function () {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.height = ch;
    canvas.width = cw;
});
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (fill === void 0) { fill = true; }
    if (stroke === void 0) { stroke = true; }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}
