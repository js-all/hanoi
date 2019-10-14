const canvas = <HTMLCanvasElement>document.createElement('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
let cw = window.innerWidth;
let ch = window.innerHeight;
const poleLeft = 0.25;
const poleMiddle = 0.5;
const poleRight = 0.75;
const poleBaseHeight = 0.66;
const poleHeight = 0.33;
const poleWidth = 0.015;
canvas.height = ch;
canvas.width = cw;

document.body.appendChild(canvas)

const circles :Circle[] = [];
let sizeT = 8;
for(let i = 0; i < 8;i++) {
    circles.push(new Circle(sizeT, 1, i+1, "hsl("+(i / 8 * 300 + 30)+", 100%, 50%)"));
    console.log(circles[i].color)
    sizeT--;
}

function draw() {
    const baseRad = createRad(4);
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "black";
    roundRect(ctx, poleLeft * cw - (0.1 * cw), poleBaseHeight * ch, (poleRight - poleLeft) * cw + (0.1 * cw * 2), poleWidth * ch, baseRad)
    roundRect(ctx, poleLeft * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad);
    roundRect(ctx, poleMiddle * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad);
    roundRect(ctx, poleRight * cw - (poleWidth * ch) / 2, poleHeight * ch + (poleWidth * ch), poleWidth * ch, (poleBaseHeight - poleHeight) * ch, baseRad)
    for(let circle of circles) {
        circle.draw(ctx);
    }
    requestAnimationFrame(draw)
}

function play() {

}

play.rate = 10;

draw();
play.interval = setInterval(play, 1000 / play.rate);

window.addEventListener("resize", () => {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.height = ch;
    canvas.width = cw;
})

interface Radius { tl: number, tr: number, br: number, bl: number }



