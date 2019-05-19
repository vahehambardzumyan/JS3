var Living = require("./Living")
var Grass = require('./grass');
module.exports = class Kaxard extends Living {
    constructor(x, y) {
        super(x, y)
        this.x = x;
        this.y = y;
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




    create() {
        var fundCords = this.getDirections(0);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            if (matrix[y][x] == 0) {
                var kt = new Grass(x, y);
                xotArr.push(kt);
                matrix[y][x] = 1;
            }
            // else if (matrix[y][x] == 1) {
            //     var kt = new Eatgrass(x, y);
            //     eatArr.push(kt);
            //     matrix[x][y] = 2;
            //     for (var i in xotArr) {
            //         if (xotArr[i].x == x && xotArr[i].y == y) {
            //             xotArr.splice(i, 1);
            //             break;
            //         }
            //     }
            // }

        }

    }
}
