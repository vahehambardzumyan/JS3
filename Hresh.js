var Living = require("./Living")
module.exports = class Hresh extends Living {
    constructor(x, y) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.multiply = 5;
        this.energy = 15;
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
        var fundCords = this.getDirections(0);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }


    eat() {
        var fundCords1 = this.getDirections(2);
        var fundCords2 = this.getDirections(3);
        let fundCords = fundCords1.concat(fundCords2);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            if (matrix[y][x] == 2) {
                for (var i in hreshArr) {
                    if (x == hreshArr[i].x && y == hreshArr[i].y) {
                        eatArr.splice(i, 1);
                    }
                }
            }else if (matrix[y][x] == 3) {
                for (var i in gishatichArr) {
                    if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
            if (this.energy < 2) {
                matrix[y][x] = 4;
                matrix[this.y][this.x] = 0;
                this.x = x;
                this.y = y;


                this.energy += 3;
            }

            this.energy--;

            this.multiply++;

            if (this.multiply == 15) {
                this.mul()
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy <= 10) {
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

            var gt = new Hresh(x, y);
            hreshArr.push(gt);

            matrix[y][x] = 4;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in hreshArr) {
            if (this.x == hreshArr[i].x && this.y == hreshArr[i].y) {
                hreshArr.splice(i, 1);
            }
        }
    }
}
