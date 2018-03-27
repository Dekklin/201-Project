'use strict';

BuildPlayer.playerList = [];
var currentPlayer = '';
var playerForm = document.getElementById('playerform');
playerForm.addEventListener('submit', handleSubmit);



function onLoad() {
    var playerDataString = localStorage.getItem('LocalPlayers');
    var retrievedPlayer = JSON.parse(playerDataString);

    if(retrievedPlayer && retrievedPlayer.length){
        BuildPlayer.playerList = retrievedPlayer;
        //     alert('Welcome back ' + playerList[playerList.length-1].name + '!');
        return;
    // }
    }
}
function BuildPlayer (name) {
    this.name = name;
    this.highScore = 0;
    this.attempts = 0;
    this.recent = [];
    console.log('player created');
    BuildPlayer.playerList.push(this);
    //currentPlayer = this;
}





// attach event listner to login submit button


function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var foundPlayer = false;
    for (var i in BuildPlayer.playerList) {
        if (BuildPlayer.playerList[i].name.includes(name)){
            currentPlayer = BuildPlayer.playerList[i];
            foundPlayer = true;
            alert('Welcome Back ' + name);
            console.log('i am here ' + currentPlayer.name);

            break;
        }
    }
    if (!foundPlayer){
        new BuildPlayer (name);
        currentPlayer = BuildPlayer.playerList[BuildPlayer.playerList.length-1];
    }

    savePlayerToLocalStorage();
}

function savePlayerToLocalStorage() {
    // TODO: Save the cart to Local Storage
    var playerData = JSON.stringify(BuildPlayer.playerList);
    localStorage.setItem( 'LocalPlayers', playerData);
}


// attach submit value to userName in array

// store userName in local storage

// check local storage if user has played before
// if (userName) then display 'welcome back ____'.
// If wrong user, allow option to create new user


//
onLoad();
console.log(currentPlayer);

//

