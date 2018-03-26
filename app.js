'use strict';
var playerList = [];
var playerForm = document.getElementById('playerform');
playerForm.addEventListener('submit', handleSubmit);

function onLoad() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var retrievedPlayer = JSON.parse(playerDataString);

    if(retrievedPlayer && retrievedPlayer.length){
        playerList = retrievedPlayer;
        alert('Welcome back ' + playerList[playerList.length-1].name + '!');
        return;
    }
}

function buildPlayer (name) {
    this.name = name;
    this.highScore = 0;
    this.attempts = 0;
    this.recent = [];
    console.log('player created');
    playerList.push(this);
}



// attach event listner to login submit button


function handleSubmit() {
    event.preventDefault();
    var newPlayer = event.target.name.value;
    new buildPlayer (newPlayer);
    console.log('i am here');
    savePlayerToLocalStorage();

}

function savePlayerToLocalStorage() {
    // TODO: Save the cart to Local Storage
    var playerData = JSON.stringify(playerList);
    localStorage.setItem( 'LocalPlayers', playerData);
}


// attach submit value to userName in array

// store userName in local storage

// check local storage if user has played before
// if (userName) then display 'welcome back ____'.
// If wrong user, allow option to create new user

//
onLoad();