'use strict';

function scoreLoad() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var retrievedPlayer = JSON.parse(playerDataString);
    BuildPlayer.playerList = retrievedPlayer;


    var displayName = document.getElementById('displayName');
    displayName.textContent = currentPlayer;
}

console.log(BuildPlayer.playerList);

scoreLoad();