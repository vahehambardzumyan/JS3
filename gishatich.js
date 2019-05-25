var Living = require("./Living")
module.exports = class Gishatich  extends Living{
    constructor(x, y) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 0;
        this.directions = [];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
        var fundCords = this.getDirections(2);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }
    eat() {
        var fundCords = this.getDirections(2);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }

            if (this.multiply != 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {
        var fundCords = this.getDirections(0);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var gt = new Gishatich(x, y);
            gishatichArr.push(gt);

            matrix[y][x] = 3;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
}