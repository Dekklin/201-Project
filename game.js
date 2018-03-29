'use strict';

// global variables
var currentSelected = null;
var shapes = [];



// random shape function
function randomShapes() {
    var randomShapeSelector = ['square','circle','diamond','triangle'];
    var k = Math.floor(Math.random()*randomShapeSelector.length);
    return randomShapeSelector[k];
}

// global function to use in random shape
function randomColor(){
    var randomColorSelector = ['red','yellow','blue','green'];
    var k = Math.floor(Math.random()*randomColorSelector.length);
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
    this.shape = randomShapes();
    this.x = randomXCoordinate();
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
            
            shapes.splice(i, 1);
           
            console.log('got it');
            console.log(currentSelected);
        }
    }
    console.log(event.offsetX, event.offsetY);
}

// make constructor function for bucket image generator
// var bucketArray = [];

// function Bucket (src, shape) {
//     this.src = src;
//     this.shape = shape;
//     bucketArray.push(this);
// }

// new Bucket ('Assets/square.png', 'square');
// new Bucket ('Assets/triangle.png', 'triangle');
// new Bucket ('Assets/diamond.png', 'diamond');
// new Bucket ('Assets/circle.png', 'circle');

// var bucketImg = document.getElementById('basket1');
// bucketImg.src = bucketArray[i].src;

// function randomPosition (){
//     var position1;
// }
Bucket.bucketArray = [];
var shapeArray = ['square', 'circle', 'triangle', 'diamond'];
var sourceArray = ['Assets/square.png', 'Assets/circle.png', 'Assets/triangle.png', 'Assets/diamond.png'];
function randomBucketShape() {
    var i = Math.floor(Math.random()*shapeArray.length);
    console.log('fn random Num:' + i);
    console.log(sourceArray);
    return i;

}
if (shapeArray === []){
    shapeArray = ['square', 'circle', 'triangle', 'diamond'];
    sourceArray = ['Assets/square.png', 'Assets/circle.png', 'Assets/triangle.png', 'Assets/diamond.png'];
    //  colorArray = ['red', 'blue', 'green', 'yellow'];
}


function Bucket() {
    var randomNumber = randomBucketShape();
   // console.log('bucket Num: ' + randomNumber);
    this.shape = shapeArray[randomNumber],
    // this.color = colorArray[randomNumber],
    this.src = sourceArray[randomNumber],
    sourceArray.splice(randomNumber,1);
    shapeArray.splice(randomNumber,1);
    Bucket.bucketArray.push(this);
}
new Bucket;
new Bucket;
new Bucket;
new Bucket;

var basket0 = document.getElementById('basket0');
var basket1 = document.getElementById('basket1');
var basket2 = document.getElementById('basket2');
var basket3 = document.getElementById('basket3');

basket0.src =Bucket.bucketArray[0].src;
basket1.src = Bucket.bucketArray[1].src;
basket2.src = Bucket.bucketArray[2].src;
basket3.src = Bucket.bucketArray[3].src;

basket0.addEventListener('click',clickBucketHandler);
basket1.addEventListener('click',clickBucketHandler);
basket2.addEventListener('click',clickBucketHandler);
basket3.addEventListener('click',clickBucketHandler);


function clickBucketHandler(event){
    console.log(event.target.id);
  
    var i = event.target.id.slice(-1);
    if(currentSelected.shape === Bucket.bucketArray[i].shape){
        console.log('congrats');
        shapeCanvas.clearRect(0,0,900,450);
        for (var j in shapes){
            shapes[j].drawShape();
        }
}
//     if(currentSelected.shape===Bucket.currentSelected)

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
new Shape();