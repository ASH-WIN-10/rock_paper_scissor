function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock" && computerSelection === "paper")||
        (playerSelection === "paper" && computerSelection === "scissor")||
        (playerSelection === "scissor" && computerSelection === "rock")
    ){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection === computerSelection){
        return `It's a tie.`;
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock Paper Scissor \n(Type 'exit' to quit game.) \nEnter your choice: ").toLowerCase();
        let computerSelection = getComputerChoice();

        if (playerSelection === "exit"){
            console.log("Thank You!");
            break;
        }
        while ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissor")){
            playerSelection = prompt("Not a valid choice!\nTry again!");
        }

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.includes("win")){
            playerScore++;
        }
        else if (result.includes("lose")){
            computerScore++;
        }
        else {
            playerScore++;
            computerScore++;
        }
    }

    if (playerScore > computerScore){
        return `Your score was ${playerScore} and Computer's score was ${computerScore}. \nYou Win!!`;
    }
    else if (playerScore < computerScore){
        return `Your score was ${playerScore} and Computer's score was ${computerScore}. \nYou Lose!!`;
    }
    else {
        return `Your score was ${playerScore} and Computer's score was ${computerScore}. \nIt's a Tie!!`;
    }
}


console.log(playGame());