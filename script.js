var side = 20;
var socket = io()
socket.on("uxarkum em matrix nkari", drawMatrix);


function setup() {
    frameRate(8);
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}
function drawMatrix(obj) {

    matrix = obj.matrix;
    s = obj.season
    document.getElementById('season').innerHTML = s;
    background('#e6e6e6');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length + 1; j++) {
            if (matrix[i][j] == 1) {
                if (s == "winter") {
                    fill("#80ff80");
                } else if (s == "spring") {
                    fill("#00cc00");
                } else if (s == "autumn") {
                    fill("#004d00");
                } else {
                    fill("green")
                }
            } else if (matrix[i][j] == 2) {
                if (s == "winter") {
                    fill("#ffff80");
                } else if (s == "spring") {
                    fill("#ffff66");
                } else if (s == "autumn") {
                    fill("#ff3300");
                } else {
                    fill("yellow")
                }
            } else if (matrix[i][j] == 3) {
                if (s == "winter") {
                    fill("#ff4d4d");
                } else if (s == "spring") {
                    fill("#ff1a1a");
                } else if (s == "autumn") {
                    fill("#990000");
                } else {
                    fill("red")
                }
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
            } else if (matrix[i][j] == 4) {
                if (s == "winter") {
                    fill("#8080ff");
                } else if (s == "spring") {
                    fill("#00cccc");
                } else if (s == "autumn") {
                    fill("#000066");
                } else {
                    fill("blue")
                }
            } else if (matrix[i][j] == 5) {
                if (s == "summer") fill("black");
                else fill("#660066");
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
