'use strict';

// global function to use in random shape
function randomColor(){
    var randomColorSelector = ['red','yellow','blue','green'];
    var k = Math.floor(Math.random()*randomColorSelector.length);
    console.log(randomColorSelector[k]);
    console.log(k);
    return randomColorSelector[k];

}

// random number generator for X axis
function randomXCoordinate() {
    var randomX  = Math.random() * 265 + 10;
    console.log(randomX);
    return randomX;
}

// random number for Y axis
function randomYCoordinate() {
    var randomY  = Math.random() * 115 + 10;
    console.log(randomY);
    return randomY;
}
// make shape creator constructor function


// make shape spawn function

function drawSquare() {
    var canvas = document.getElementById('shape');
    var square = canvas.getContext('2d');

    square.fillStyle = randomColor();
    square.fillRect(randomXCoordinate(), randomYCoordinate(), 15, 15);
    // square.stroke();

}

function drawTriangle() {
    var canvas1 = document.getElementById('shape');
    var triangle = canvas1.getContext('2d');
    var triangleX = randomXCoordinate();
    var triangleY = randomYCoordinate();

    triangle.fillStyle = randomColor();
    triangle.beginPath();
    triangle.moveTo(triangleX, triangleY);
    triangle.lineTo(triangleX + 15, triangleY + 15);
    triangle.lineTo(triangleX + 15, triangleY - 15);
    // triangle.stroke();
    triangle.fill();
}

function drawDiamond() {
    var canvas2 = document.getElementById('shape');
    var diamond = canvas2.getContext('2d');
    var diamondX = randomXCoordinate();
    var diamondY = randomYCoordinate();

    diamond.fillStyle = randomColor();
    diamond.beginPath();
    diamond.moveTo(diamondX, diamondY);
    diamond.lineTo(diamondX + 10, diamondY + 15);
    diamond.lineTo(diamondX + 20, diamondY);
    diamond.lineTo(diamondX + 10, diamondY - 15);
    // diamond.stroke();
    diamond.fill();
}

function drawCircle() {
    var canvas3 = document.getElementById('shape');
    var circle = canvas3.getContext('2d');

    circle.fillStyle = randomColor();
    circle.beginPath();
    circle.arc(randomXCoordinate(), randomYCoordinate(), 10, 0, 2* Math.PI);
    // circle.stroke();
    circle.fill();
}

// event listener on click
// track score

// create var to hold current shape


// add game timer function for 60 sec



drawSquare();
drawTriangle();
drawDiamond();
drawCircle();
