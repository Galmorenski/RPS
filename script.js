const userScore = document.getElementById('human');
const computerScore = document.getElementById('computer');
const textArea =  document.querySelector('div.Announcement');

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

function singleRound(e) {
    let computerSelection = computerPlay();
    console.log(computerSelection);
    let playerSelection = e.target.id;
    
    
    console.log(playerSelection);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors") {
    
        textArea.textContent = `You have chosen ${playerSelection} while the computer choosed ${computerSelection} Therfore The Computer Has Won!, Pick any button to play again!`
        ScoreUpdater(false);
    }
    else if (playerSelection == computerSelection) {
        textArea.textContent = `You have chosen ${playerSelection} while the computer choosed ${computerSelection} Surprisingly enough That's a Tie!, Pick any button to play again!`
  
        
    }
    else {
        textArea.textContent = `You have chosen ${playerSelection} while the computer choosed ${computerSelection}, You win!`
      
        ScoreUpdater(true);
    }
}

function ScoreUpdater(userWon) {
    const actualHumanScore = parseInt(userScore.textContent);
    const actualComputerScore = parseInt(computerScore.textContent);

        if (userWon)
            userScore.textContent = actualHumanScore+1;
        if (!userWon){
            computerScore.textContent = actualComputerScore+1;
        }
            if (userScore.textContent == '5') {
                textArea.textContent= "User Has Won! The Game will now end"
              
            }
            else if (computerScore.textContent == '5') {
                textArea.textContent= "Computer Has Won! The Game will now end"
   
            }
    
    
   
}

const gameButtons = document.querySelectorAll('button.option');
gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', singleRound)
});
    

