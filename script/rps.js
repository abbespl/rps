//Function computerPlay that will randomly choose Rock Paper or Scissors

function computerPlay () {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * options.length);
    let selectedOption = options[choice];
    return (selectedOption)
}

//Function that plays a single round with two parameters - playerSelection and computerSelection and then returns string that declares the winner

function playRound (playerSelection, computerSelection) {

//Case insensitivenes function
let user = playerSelection.toUpperCase();
let cpu = computerSelection.toUpperCase();
//

    if (((user === "ROCK") && (cpu === "SCISSORS")) || ((user === "PAPER") && (cpu === "ROCK")) || ((user === "SCISSORS") && (cpu === "PAPER"))) {
        alert ("Win! "+user+" beats " +cpu);
        return ("Win! "+user+" beats " +cpu);
    }

    else if (((user === "ROCK") && (cpu === "PAPER")) || ((user === "PAPER") && (cpu === "SCISSORS")) || ((user === "SCUSSIRS") && (cpu === "ROCK"))) {
        alert ("You lose! "+cpu+" beats "+user);
        return ("You lose! "+cpu+" beats "+user);
    }

    else if (user === cpu) {
        alert ("Tie!");
        return ("Tie!");
    }

    else {
        alert ('Something went wrong, try again please...');
        return ('Something went wrong, try again please...');
    }
}

 function game () {
    let playerSelection = prompt ('Rock, Paper or Scissors?')
    let computerSelection = computerPlay ();
    alert('Computer selection: '+computerSelection);
    playRound(playerSelection,computerSelection);
 }
 game();

