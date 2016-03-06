/*===============================================
=            GraphR by Un Known            =
===============================================*/

/*----------  Enter strict mode  ----------*/

"use strict";

/*----------  Log the loading to the console  ----------*/

var loadStart = new Date();
loadStart = loadStart.getTime();
console.log("GraphR : Loading...");

/*----------  Create graphR.graphR object for methods  ----------*/

const graphR = {};

/*----------  Create graphR.config object for settings  ----------*/

Object.defineProperty(graphR, "config", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: {}
});

/*----------  Create graphR.config.graphID setting  ----------*/

Object.defineProperty(graphR.config, "graphID", {
    get: function() {
        return undefined;
    },
    set: function(value) {
        graphR.graph = document.getElementById(value).getContext("2d");
    }
});

/*----------  Create graphR.Component class  ----------*/

graphR.Component = class {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    static distance(x1, y1, x2, y2) {
        return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
    }
    static direction(x1, y1, x2, y2) {
        if (this.distance(x1, y1, x2, y2) === 0) {
            return [-1, 0];
        } else {
            var nx = (x2 - x1) / this.distance(x1, y1, x2, y2);
            var ny = (y2 - y1) / this.distance(x1, y1, x2, y2);
            return [nx, ny];
        }
    }

};

/*----------  Create graphR.Circle class  ----------*/

graphR.Circle = class extends graphR.Component {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }
    draw() {
        graphR.graph.beginPath();
        graphR.graph.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        graphR.graph.fillStyle = this.color;
        graphR.graph.fill();
    }
    clear() {
        graphR.graph.clearRect(this.x - this.radius - 2, this.y - this.radius - 2, this.x + this.radius + 4, this.y + this.radius + 4);
    }
    move(x, y) {
        this.clear();
        this.x += x;
        this.y += y;
        this.draw();
    }
};

/*----------  Create graphR.Rectange class  ----------*/

graphR.Rectangle = class extends graphR.Component {
    constructor(x, y, width, height, color) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }
    draw() {
        graphR.graph.fillStyle = this.color;
        graphR.graph.fillRect(this.x, this.y, this.width, this.height);
    }
    clear() {
        graphR.graph.clearRect(this.x - 2, this.y - 2, this.width + 4, this.height + 4);
    }
    move(x, y) {
        this.clear();
        this.x += x;
        this.y += y;
        this.draw();
    }
};

/*----------  Create graphR.CircleProjectile class  ----------*/

graphR.CircleProjectile = class extends graphR.Circle {
    constructor(x, y, radius, color) {
        super(x, y, radius, color);
    }
};

/*----------  Create graphR.RectangleProjectile class  ----------*/

graphR.RectangleProjectile = class extends graphR.Rectangle {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }
};

/*----------  Create graphR.CircleBullet class  ----------*/

graphR.CircleBullet = class extends graphR.CircleProjectile {
    constructor(x, y, radius, color, desx, desy) {
        super(x, y, radius, color);
        this.desx = desx;
        this.desy = desy;
    }
    get direction() {
        return graphR.Component.direction(this.x, this.y, this.desx, this.desy);
    }
    get distance() {
        return Math.sqrt((this.desx - this.x) * (this.desx - this.x) + (this.desy - this.y) * (this.desy - this.y));
    }
    move(speed) {
        if (this.permaNx === undefined && this.permaNy === undefined) {
            this.permaNx = this.direction[0];
            this.permaNy = this.direction[1];
        }
        var movex = this.permaNx * speed;
        var movey = this.permaNy * speed;
        super.move(movex, movey);
    }
};

/*----------  Create graphR.RectangleBullet class  ----------*/

graphR.RectangleBullet = class extends graphR.RectangleProjectile {
    constructor(x, y, width, height, color, desx, desy) {
        super(x, y, width, height, color);
        this.desx = desx;
        this.desy = desy;
    }
    get direction() {
        return graphR.Component.direction(this.x, this.y, this.desx, this.desy);
    }
    get distance() {
        return Math.sqrt((this.desx - this.x) * (this.desx - this.x) + (this.desy - this.y) * (this.desy - this.y));
    }
    move(speed) {
        if (this.permaNx === undefined && this.permaNy === undefined) {
            this.permaNx = this.direction[0];
            this.permaNy = this.direction[1];
        }
        var movex = this.permaNx * speed;
        var movey = this.permaNy * speed;
        super.move(movex, movey);
    }
};

/*----------  Log the loading to the console  ----------*/

var loadEnd = new Date();
loadEnd = loadEnd.getTime();
console.log("GraphR : Done loading! Ready to use! Elapsed loading time(ms): " + String(loadEnd - loadStart));

/*----------  Insert "about"  ----------*/

console.log("GraphR JS Library by Un Known");
