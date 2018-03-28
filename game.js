'use strict';

// global variables
var currentSelected = null;
var shapes = [];



// random shape function
function randomShapes() {
    var randomShapeSelector = ['square','circle','diamond','triangle'];
    var k = Math.floor(Math.random()*randomShapeSelector.length);
    console.log(randomShapeSelector[k]);
    console.log('random shape: ' + k);
    return randomShapeSelector[k];
}

// global function to use in random shape
function randomColor(){
    var randomColorSelector = ['red','yellow','blue','green'];
    var k = Math.floor(Math.random()*randomColorSelector.length);
    console.log(randomColorSelector[k]);
    console.log('random color: ' + k);
    return randomColorSelector[k];

}

// random number generator for X axis
function randomXCoordinate() {
    var randomX  = Math.random() * 265 + 10;
    return randomX;
}

// random number for Y axis
function randomYCoordinate() {
    var randomY  = Math.random() * 115 + 10;
    return randomY;
}

// make shape creator constructor function
function Shape (){
    this.color = randomColor();
    this.shape =randomShapes();
    this.x =randomXCoordinate();
    this.y = randomYCoordinate();
    this.drawShape();
    shapes.push(this);

}
var canvas = document.getElementById('shape');
var shapeCanvas = canvas.getContext('2d');

canvas.addEventListener('click', clickedOnShape);

function clickedOnShape(event) {
    for(var i in shapes){
        if(((event.offsetX/3)>= shapes[i].x-2) && ((event.offsetX/3) <= shapes[i].x+17) && ((event.offsetY/3) >= shapes[i].y-8) && ((event.offsetY/3) <= shapes[i].y+23)){
            currentSelected = shapes[i];
            shapeCanvas.clearRect(0,0,900,450);
            shapes.splice(i, 1);
            for (var j in shapes){
                shapes[j].drawShape();
            }
            console.log('got it');
            console.log(currentSelected);
        }
    }
    console.log(event.offsetX, event.offsetY);
}
Shape.prototype.drawShape = function(){


    // var shapeCanvas = canvas.getContext('2d');

    if (this.shape === 'square') {
        shapeCanvas.fillStyle = this.color;
        shapeCanvas.fillRect(this.x, this.y, 15, 15);
    }
    else if (this.shape === 'triangle'){
        shapeCanvas.fillStyle = this.color;
        shapeCanvas.beginPath();
        shapeCanvas.moveTo(this.x, this.y);
        shapeCanvas.lineTo(this.x + 15, this.y + 15);
        shapeCanvas.lineTo(this.x+ 15, this.y - 15);
        shapeCanvas.fill();
    }
    else if (this.shape === 'diamond') {
        shapeCanvas.fillStyle = this.color;
        shapeCanvas.beginPath();
        shapeCanvas.moveTo(this.x, this.y +8);
        shapeCanvas.lineTo(this.x + 10, this.y + 23);
        shapeCanvas.lineTo(this.x + 20, this.y + 8);
        shapeCanvas.lineTo(this.x + 10, this.y - 7);
        // shapeCanvas.stroke();
        shapeCanvas.fill();
    }
    else if (this.shape === 'circle') {

        shapeCanvas.fillStyle = this.color;
        shapeCanvas.beginPath();
        shapeCanvas.arc(this.x, this.y, 10, 0, 2* Math.PI);
        // shapeCanvas.stroke();
        shapeCanvas.fill();
    }
};

// event listener on click


// track score

// create var to hold current shape


// add game timer function for 60 sec



// drawSquare();
// drawTriangle();
// drawDiamond();
// drawCircle();
new Shape();
new Shape();
new Shape();

