function getComputerChoice(){
    const array = ['rock', 'paper', 'scisscors']
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
        else if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                return "You Lose! Paper beats Rock";
            }
            else{
                return "You Win! Rock beats Scissors";
            }
        }

        else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                return "You Lose! Scissors beats Paper";
            }
            else{
                return "You Win! Paper beats Rock";
            }
        }

        else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                return "You Lose! Rock beats Scissors";
            }
            else{
                return "You Win! Scissors beat Paper";
            }
        }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("Enter your selection");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if(result.includes("Win")){
            playerScore++;
        }
        else if(result.includes("Lose")){
            computerScore++;
        }
    }

    console.log(`Final Score: You ${playerScore}, Computer ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Congratulations, you win!');
      } else if (playerScore < computerScore) {
        console.log('Sorry, you lose.');
      } else {
        console.log('It\'s a tie game!');
      }
    
}





game();