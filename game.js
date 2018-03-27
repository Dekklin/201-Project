'use strict';
function randomColor(){
    var randomColorSelector = ['red','yellow','blue','green'];
    var k = Math.floor(Math.random()*randomColorSelector.length);
    console.log(randomColorSelector[k]);
    console.log(k);
    return randomColorSelector[k];

}

function drawSquare() {
    var canvas = document.getElementById('square');
    var square = canvas.getContext('2d');

    square.fillStyle = randomColor();
    square.fillRect(10, 10, 100, 100);

}
function drawTriangle() {
    var canvas1 = document.getElementById('triangle');
    var triangle = canvas1.getContext('2d');
    triangle.fillStyle = randomColor();
    triangle.beginPath();
    triangle.moveTo(75, 50);
    triangle.lineTo(100, 75);
    triangle.lineTo(100, 25);
    triangle.fill();
}







drawSquare();
drawTriangle();