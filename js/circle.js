"use strict";
var Circle = /** @class */ (function () {
    function Circle(size, pos, stack, color, x, y) {
        if (x === void 0) { x = NaN; }
        if (y === void 0) { y = NaN; }
        this.size = size;
        this.pos = pos;
        this.stack = stack;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    Circle.prototype.draw = function (ctx) {
        var baseRad = createRad(6);
        var cw1 = ctx.canvas.width;
        var ch1 = ctx.canvas.height;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        var width = (0.25 * 1) / 8 * this.size * cw1;
        var height = Circle.CircleHeight * ch1;
        if (!isNaN(this.x) && !isNaN(this.y)) {
            roundRect(ctx, this.x - width / 2, this.y - height / 2, width, height, baseRad);
        }
        else {
            var x = Circle.PolePos[this.pos] * cw1 - width / 2;
            var y = Circle.CirclePoleY * ch1 - (Circle.CircleHeight * this.stack * ch1);
            roundRect(ctx, x, y, width, height, baseRad);
        }
    };
    Circle.CircleWidth = 0.25;
    Circle.CircleTotal = 8;
    Circle.CircleHeight = 0.225 / Circle.CircleTotal;
    Circle.PolePos = [0.25, 0.50, 0.75];
    Circle.CirclePoleY = 0.66;
    return Circle;
}());
