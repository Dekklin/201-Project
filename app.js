'use strict';

var playerList = [];
var currentPlayer = '';

var playerForm = document.getElementById('playerform');
playerForm.addEventListener('submit', handleSubmit);


function onLoad() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    if(playerDataString && playerDataString.length){
        var retrievedPlayer = JSON.parse(playerDataString);
        playerList = retrievedPlayer;
        return;
    }
}
function BuildPlayer (name) {
    this.name = name;
    this.highScore = 0;
    this.attempts = [];
    this.currentScore = 0;
    this.recent = [];
    console.log('player created');
    playerList.push(this);
    //currentPlayer = this;
}

// attach event listner to login submit button

function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var foundPlayer = false;
    for (var i in playerList) {
        if (playerList[i].name.includes(name)){
            currentPlayer = playerList[i];
            foundPlayer = true;
            alert('Welcome Back ' + name);
            console.log('i am here ' + currentPlayer.name);

            break;
        }
    }
    if (!foundPlayer){
        new BuildPlayer (name);
        currentPlayer = playerList[playerList.length-1];
    }

    savePlayerToLocalStorage();
}

function savePlayerToLocalStorage() {
    // Save the cart to Local Storage
    var playerData = JSON.stringify(playerList);
    var currentPlayerData = JSON.stringify(currentPlayer);
    localStorage.setItem( 'LocalCurrentPlayer' , currentPlayerData);
    localStorage.setItem( 'LocalPlayers', playerData);
}


onLoad();
console.log(currentPlayer);



