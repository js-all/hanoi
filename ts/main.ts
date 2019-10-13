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
    const baseRad : Radius = {tl: 10, tr: 10, bl: 10, br:10};
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'black';
    roundRect(ctx, poleLeft * cw - (0.1*cw), poleBaseHeight * ch, (poleRight - poleLeft) * cw + (0.1 * cw), 0.03 * ch, baseRad)
    
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

interface Radius {tl: number, tr: number, br: number, bl: number}


function roundRect(ctx: CanvasRenderingContext2D, x :number, y :number, width :number, height :number, radius :Radius, fill =true, stroke = true) {
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
