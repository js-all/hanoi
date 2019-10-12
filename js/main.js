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
    ctx.clearRect(0, 0, cw, ch);
}
function play() {
}
draw.rate = 30;
play.rate = 10;
draw.interval = setInterval(draw, 1000 / draw.rate);
play.interval = setInterval(play, 1000 / play.rate);
window.addEventListener("resize", function () {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.height = ch;
    canvas.width = cw;
});
function drawRoundRect(ctx) {
}
