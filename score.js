'use strict';
var currentPlayer = null;
var playerData = null;
var orderAttempts = document.getElementById('displayAttempts');
function retrieveLocalStorage() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var currentPlayerDataString = localStorage.getItem('LocalCurrentPlayer');
    var retrievedCurrentPlayer = JSON.parse(currentPlayerDataString);
    currentPlayer = retrievedCurrentPlayer;
    var retrievedPlayer = JSON.parse(playerDataString);
    playerData = retrievedPlayer;
    console.log(playerData);
}

function loadScore(){
    var displayName = document.getElementById('displayName');
    displayName.textContent = currentPlayer.name;
    var displayHS = document.getElementById('displayHighScore');
    displayHS.textContent = currentPlayer.highScore;

    for(var i in currentPlayer.attempts){
        var attemptDisplay = document.createElement('li');
        attemptDisplay.textContent = currentPlayer.attempts[i];
        orderAttempts.appendChild(attemptDisplay);
    }
}

retrieveLocalStorage();
currentPlayer.attempts =[100,200,300];
loadScore();
