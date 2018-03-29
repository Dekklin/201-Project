'use strict';

// global variables
var canvas = document.getElementById('shape');
var shapeCanvas = canvas.getContext('2d');
var scoreCount = 0;

var currentSelected = null;
var shapes = [];
var currentSelectedIndex = null;
var currentPlayer = null;
var playerList = null;
function retrieveLocalStorage() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var currentPlayerDataString = localStorage.getItem('LocalCurrentPlayer');

    var retrievedCurrentPlayer = JSON.parse(currentPlayerDataString);
    currentPlayer = retrievedCurrentPlayer;

    var retrievedPlayer = JSON.parse(playerDataString);
    playerList = retrievedPlayer;

    console.log('retrieved player list: ' + playerList);
}
retrieveLocalStorage();



function startGame() {



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


    var shapeArray = ['square', 'circle', 'triangle', 'diamond'];
    var sourceArray = ['Assets/square.png', 'Assets/circle.png', 'Assets/triangle.png', 'Assets/diamond.png'];

    function clickedOnShape(event) {
        for(var i in shapes){
            if(((event.offsetX/3)>= shapes[i].x-2) && ((event.offsetX/3) <= shapes[i].x+21) && ((event.offsetY/3) >= shapes[i].y-8) && ((event.offsetY/3) <= shapes[i].y+23)){
                console.log('got it');
                currentSelected = shapes[i];
                currentSelectedIndex = i;

                console.log(currentSelected);
            }
        }

    }
    canvas.addEventListener('click', clickedOnShape);


    function randomBucketShape() {
        var i = Math.floor(Math.random()*shapeArray.length);
        console.log('fn random Num:' + i);
        console.log(sourceArray);
        return i;

    }
    if (shapeArray === []){
        shapeArray = ['square', 'circle', 'triangle', 'diamond'];
        sourceArray = ['Assets/square.png', 'Assets/circle.png', 'Assets/triangle.png', 'Assets/diamond.png'];
    }

    Bucket.bucketArray = [];

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

    basket0.src = Bucket.bucketArray[0].src;
    basket1.src = Bucket.bucketArray[1].src;
    basket2.src = Bucket.bucketArray[2].src;
    basket3.src = Bucket.bucketArray[3].src;

    basket0.addEventListener('click',clickBucketHandler);
    basket1.addEventListener('click',clickBucketHandler);
    basket2.addEventListener('click',clickBucketHandler);
    basket3.addEventListener('click',clickBucketHandler);


    function clickBucketHandler(event){
        console.log(event.target.id);
        shapes.splice(currentSelectedIndex, 1);
        var i = event.target.id.slice(-1);
        if(currentSelected.shape === Bucket.bucketArray[i].shape){

            console.log('congrats');
            shapeCanvas.clearRect(0,0,900,450);
            for (var j in shapes){
                shapes[j].drawShape();
            }
            scoreCount = scoreCount + 100;
            console.log ('score inside clickHandler: ' + scoreCount);
        }

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
            shapeCanvas.moveTo(this.x, this.y + 5);
            shapeCanvas.lineTo(this.x + 15, this.y + 20);
            shapeCanvas.lineTo(this.x + 15, this.y - 10);
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
    function pasteShapes() {
        new Shape();
        new Shape();
        new Shape();
        new Shape();

    }
    setInterval(pasteShapes, 5000);

    new Shape();
    new Shape();
    new Shape();
    new Shape();
}

function saveData(){
    if(scoreCount > currentPlayer.highScore){
        currentPlayer.highScore = scoreCount;
        currentPlayer.attempts.push(scoreCount);
    }
    //add last score to currentPlayer.attempts object
    currentPlayer.attempts.push(scoreCount);
  
    new Shape();
    new Shape();
    new Shape();
    new Shape();
}
function saveData(){
    currentPlayer.recent.unshift(scoreCount);
    if(scoreCount > currentPlayer.highScore){
        currentPlayer.highScore = scoreCount;
    }
  
    if(currentPlayer.recent.length >= 5){
        currentPlayer.recent.pop();
    }
  
    currentPlayer.attempts ++;
    window.location.href='score.html';
    var playerData = JSON.stringify(playerList);
    var currentPlayerData = JSON.stringify(currentPlayer);
    localStorage.setItem( 'LocalCurrentPlayer', currentPlayerData);
    localStorage.setItem( 'LocalPlayers', playerData);
    window.location.href='score.html';
}

setTimeout(startGame, 500);
setTimeout(saveData, 1000);

