var xotArr = [];
var eatArr = [];
var gishatichArr = [];
var hreshArr = [];
var kaxardArr = [];


var matrix = []
for (y = 0; y < 50; y++) {
    matrix.push([])
    for (x = 0; x < 50; x++) {
        var p = Math.round(Math.random() * 100);
        if (p < 30) {
            matrix[y].push(1);
        }
        else if (p >= 30 && p < 50) {
            matrix[y].push(0);
        }
        else if (p >= 50 && p < 70) {
            matrix[y].push(2);
        }
        else if (p >= 70 && p < 90) {
            matrix[y].push(3);
        }
        else if (p >= 90 && p < 98) {
            matrix[y].push(4);
        }
        else if (p >= 98 && p < 100) {
            matrix[y].push(5);
        }

    }
}

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(expres.static("."));
app.get('/', function (req, res) {
    res.redict('index.html');
});
server.listen(3000);


function setup() {
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    function createObject() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 2) {
                    var eatgrass = new Eatgrass(x, y);
                    eatArr.push(eatgrass);
                } else if (matrix[y][x] == 1) {
                    var grass = new Grass(x, y);
                    xotArr.push(grass);
                } else if (matrix[y][x] == 3) {
                    var gishatich = new Gishatich(x, y);
                    gishatichArr.push(gishatich);
                } else if (matrix[y][x] == 4) {
                    var hresh = new Hresh(x, y);
                    hreshArr.push(hresh);
                } else if (matrix[y][x] == 5) {
                    var kaxard = new Kaxard(x, y);
                    kaxardArr.push(kaxard);
                }
            }
        }
    }
}
createObject();

function game() {
    for (var u in xotArr) {
        xotArr[u].mul();
    }

    for (var u in eatArr) {
        eatArr[u].eat();
    }

    for (var u in gishatichArr) {
        gishatichArr[u].eat();
    }

    for (var u in hreshArr) {
        hreshArr[u].eat();
    }

    for (var u in kaxardArr) {
        kaxardArr[u].create();
    }
    io.sockets.emit("uxarkuhuihiuhfihr", matrix)
}


setInterval(game, 10)

