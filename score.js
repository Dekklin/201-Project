'use strict';
var currentPlayer = 0;
var playerList = 0;
var orderAttempts = document.getElementById('displayAttempts');
function retrieveLocalStorage() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var currentPlayerDataString = localStorage.getItem('LocalCurrentPlayer');
    var retrievedCurrentPlayer = JSON.parse(currentPlayerDataString);
    currentPlayer = retrievedCurrentPlayer;
    var retrievedPlayer = JSON.parse(playerDataString);
    playerList = retrievedPlayer;
    console.log(playerList);
}

function loadScore(){
    var displayName = document.getElementById('displayName');
    displayName.textContent = currentPlayer.name;
    var displayHS = document.getElementById('displayHighScore');
    displayHS.textContent = currentPlayer.highScore;

    for(var i in currentPlayer.recent){
        var attemptDisplay = document.createElement('li');
        attemptDisplay.textContent = currentPlayer.recent[i];
        orderAttempts.appendChild(attemptDisplay);
    }
}

retrieveLocalStorage();
loadScore();
