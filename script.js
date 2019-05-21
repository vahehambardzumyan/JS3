var side = 20;
var socket = io()
socket.on("uxarkum em matrix nkari", drawMatrix);

function setup() {
    frameRate(8);
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}
function drawMatrix(matrix) {

    // matrix = obj.m
    // season = obj.s

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
    socket.emit("kill");
}
function xot() {
    socket.emit("xot");
}
function potorik() {
    socket.emit("potorik");
}
function gishatich() {
    socket.emit("gishatich");
}
function improviz() {
    socket.emit("improviz");
}
function xotaker() {
    socket.emit("xotaker");
}

