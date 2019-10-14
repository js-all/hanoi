class Circle {
    static CircleWidth = 0.25
    static CircleTotal = 8;
    static CircleHeight = 0.225 / Circle.CircleTotal
    static PolePos = [0.25, 0.50, 0.75]
    static CirclePoleY = 0.66
    size: number
    pos: number
    stack: number;
    x: number
    y: number
    color: string
    constructor(size: number, pos: number, stack: number, color: string, x = NaN, y = NaN) {
        this.size = size;
        this.pos = pos;
        this.stack = stack;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw(ctx: CanvasRenderingContext2D) {
        const baseRad = createRad(6)
        const cw1 = ctx.canvas.width;
        const ch1 = ctx.canvas.height;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        const width = (0.25 * 1) / 8 * this.size * cw1;
        const height = Circle.CircleHeight * ch1;
        if (!isNaN(this.x) && !isNaN(this.y)) {
            roundRect(ctx, this.x - width / 2, this.y - height / 2, width, height, baseRad);
        }else {
            const x = Circle.PolePos[this.pos] * cw1 - width / 2;
            const y = Circle.CirclePoleY * ch1 - (Circle.CircleHeight * this.stack * ch1);
            roundRect(ctx, x, y, width, height, baseRad);
        } 

    }
}