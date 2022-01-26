function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
        return "Rock";
    }
    else if (result == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer Has Won!");
        return 1;
    }
    else if (playerSelection == computerSelection) {
        console.log("That's a Tie");
        return 0;
    }
    else {
        console.log("Congratulations! You have won");
        return -1;
    }
}

function Game() {
    let userScore = 0;
    let computerScore = 0;
    while (true) {
        let userSelection = window.prompt("Rock, Paper or Scissors? What Shall it be?", "");
        let round = singleRound(userSelection, computerPlay())
        console.log(round);
        if (round == -1)
            userScore++;
        if (round == 1){
            computerScore++;
        }
            console.log("UserScore:" + userScore + " ComputerScore:" + computerScore);
            if (userScore == 5) {
                console.log("User Has Won! The Game will now end");
                return;
            }
            else if (computerScore == 5) {
                console.log("Computer Has Won! The Game will now end");
                return;
            }
    }
    
   
}
