var side = 15;
var socket = io()
socket.on("uxarkum em matrix nkari", drawMatrix);

function setup() {
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}

function drawMatrix(obj) {

    matrix = obj.m
    season = obj.s

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
}

function spanel() {
    socket.io("spani", 445695963)
}


