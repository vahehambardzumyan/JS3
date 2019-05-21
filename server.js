xotArr = [];
eatArr = [];
gishatichArr = [];
hreshArr = [];
kaxardArr = [];
var Grass = require('./grass');
var Kaxard = require('./kaxard');
var Gishatich = require('./gishatich');
var Eatgrass = require('./eatgrass');
var Hresh = require('./Hresh');
weather = ["Ձմեռ", "Գարուն", "Ամառ", "Աշուն"];

matrix = []
for (y = 0; y < 40; y++) {
    matrix.push([])
    for (x = 0; x < 40; x++) {
        var p = Math.round(Math.random() * 100);
        if (p < 0) {
            matrix[y].push(1);
        }
        else if (p >= 0 && p < 50) {
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


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redict('index.html');
});
server.listen(3000);

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
createObject(matrix);

function game() {
    // takt++
    // if(takt<=20){
    //     eghanak ="amar"
    // }else if(takt<=40 ){
    //     eghanak="dzmer"
    // }else {
    //     takt=0




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
    io.sockets.emit("uxarkum em matrix nkari", matrix)
}
setInterval(game, 1000)



function event1() {
    io.on('connection', function (socket) {
        socket.on("kill", function () {
            xotArr = [];
            eatArr = [];
            gishatichArr = [];
            hreshArr = [];
            kaxardArr = [];
            for (let y = 0; y < 40; y++) {
                for (let x = 0; x < 40; x++) {
                    if (y == x || y + x == 39) {
                        matrix[y][x] = 3;
                    }
                    else {
                        matrix[y][x] = 0;
                    }

                }
            }

        })
    });
}
event1()
setInterval(event1, 1000)







function event2() {
    io.on('connection', function (socket) {
        socket.on("xot", function () {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 1
                        xotArr.push(new Grass(x, y))
                    }
                }
            }

        })
    });
}
event2(matrix)
setInterval(event2, 1000)




function event3() {
    io.on('connection', function (socket) {
        socket.on('potorik', function () {
            stormChecker = true;
            var randInt = Math.floor(Math.random() * ((40 * 2) - 7) + 7);
            var randInt2 = Math.floor(Math.random() * ((40 - 7) - (-40 + 7)) - 40 + 7);
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    if (y + x == randInt || y + x == randInt - 5 || x == y + randInt2 || x == y + randInt2 - 5) {
                        if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                            if (matrix[y][x] == 1) {
                                for (var l in xotArr) {
                                    if (x == xotArr[l].x && y == xotArr[l].y) {
                                        xotArr.splice(l, 5);
                                        break;
                                    }
                                }
                            }
                            else if (matrix[y][x] == 2) {
                                for (var l in eatArr) {
                                    if (x == eatArr[l].x && y == eatArr[l].y) {
                                        eatArr.splice(l, 5);
                                        break;
                                    }
                                }
                            }
                            else if (matrix[y][x] == 3) {
                                for (var l in gishatichArr) {
                                    if (x == gishatichArr[l].x && y == gishatichArr[l].y) {
                                        gishatichArr.splice(l, 5);
                                        break;
                                    }
                                }
                            }
                            matrix[y][x] = 7;
                        }
                    }
                }
            }
        })

    });
}
event3(matrix)
setInterval(event3, 1000)



function event4() {
    io.on('connection', function (socket) {
        socket.on("gishatich", function () {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 3
                        gishatichArr.push(new Gishatich(x, y))
                    }
                }
            }

        })
    });
}
event4(matrix)
setInterval(event4, 1000)


function event5() {
    io.on('connection', function (socket) {
        socket.on("improviz", function () {
            function smile(a, b) {
                matrix[a][b] = 5
                kaxardArr.push(new Kaxard(x, y))
            }
            for (y = 15; y < 25; y++) {
                for (x = 25; x > 15; x--) {
                    smile(y, x)
                }
            }
        })
    });
}
event5(matrix)
setInterval(event5, 1000)



function event6() {
    io.on('connection', function (socket) {
        socket.on("xotaker", function () {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 2
                        eatArr.push(new Eatgrass(x, y))
                    }
                }
            }

        })
    });
}
event6(matrix)
setInterval(event6, 1000)