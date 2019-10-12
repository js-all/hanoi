const canvas = <HTMLCanvasElement>document.createElement('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
let cw = window.innerWidth;
let ch = window.innerHeight;
const poleLeft = 0.25;
const poleMiddle = 0.5;
const poleRight = 0.75;
const poleBaseHeight = 0.66;
canvas.height = ch;
canvas.width = cw;

document.body.appendChild(canvas)

function draw() {
    ctx.clearRect(0, 0, cw, ch);
    
}

function play() {
    
}

draw.rate = 30;
play.rate = 10;

draw.interval = setInterval(draw, 1000 / draw.rate);
play.interval = setInterval(play, 1000 / play.rate);

window.addEventListener("resize", () => {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.height = ch;
    canvas.width = cw;
})

function drawRoundRect(ctx: CanvasRenderingContext2D) {
    
}
