"use strict";
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var cw = window.innerWidth;
var ch = window.innerHeight;
var poleLeft = 0.25;
var poleMiddle = 0.5;
var poleRight = 0.75;
var poleBaseHeight = 0.66;
var poleHeight = 0.33;
var poleWidth = 0.015;
canvas.height = ch;
canvas.width = cw;
document.body.appendChild(canvas);
var circles = [];
var sizeT = 8;
for (var i = 0; i < 8; i++) {
    circles.push(new Circle(sizeT, 1, i + 1, "hsl(" + (i / 8 * 300 + 30) + ", 100%, 50%)"));
    console.log(circles[i].color);
    sizeT--;
}
function draw() {
    var baseRad = createRad(4);
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "black";
    roundRect(ctx, poleLeft * cw - (0.1 * cw), poleBaseHeight * ch, (poleRight - poleLeft) * cw + (0.1 * cw * 2), poleWidth * ch, baseRad);
    roundRect(ctx, poleLeft * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad);
    roundRect(ctx, poleMiddle * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad);
    roundRect(ctx, poleRight * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad);
    for (var _i = 0, circles_1 = circles; _i < circles_1.length; _i++) {
        var circle = circles_1[_i];
        circle.draw(ctx);
    }
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
