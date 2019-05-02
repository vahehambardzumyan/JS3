var side = 15;
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


function setup() {
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side); 
    background('#acacac');

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

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
            } else if (matrix[i][j] == 2) {
                fill("yellow");
            } else if (matrix[i][j] == 3) {
                fill("red");
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
            } else if (matrix[i][j] == 4) {
                fill("blue");
            } else if (matrix[i][j] == 5) {
                fill("black");
            }
            rect(j * side, i * side, side, side);


        }
    }


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

}


