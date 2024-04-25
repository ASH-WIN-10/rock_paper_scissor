function getComputerSelection() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock" && computerSelection === "paper")||
        (playerSelection === "paper" && computerSelection === "scissor")||
        (playerSelection === "scissor" && computerSelection === "rock")
    )
        return computerScore++;

    else if (playerSelection === computerSelection)
        return;

    else if ((computerSelection === "rock" && playerSelection === "paper")||
            (computerSelection === "paper" && playerSelection === "scissor")||
            (computerSelection === "scissor" && playerSelection === "rock")
    )
        return playerScore++;
}


let playerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('div>button');

const resultDiv = document.querySelector('#result');
let result = document.createElement('span');
resultDiv.appendChild(result);

const playerScoreDiv = document.querySelector('#playerScore');
let playerScoreText = document.createElement('span');
playerScoreDiv.appendChild(playerScoreText);

const computerScoreDiv = document.querySelector('#computerScore');
let computerScoreText = document.createElement('span');
computerScoreDiv.appendChild(computerScoreText);


buttons.forEach(selection => {
    selection.addEventListener('click', (e) => {
        playerSelection = e.target.textContent.toLowerCase();
        
        playRound(playerSelection, getComputerSelection());
        
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
       
        if ((computerScore === 5) || (playerScore === 5)){
            if (playerScore > computerScore)
                result.textContent = `You Win!!`;
    
            else if (playerScore < computerScore)
                result.textContent = `You Lose!!`;
    
            else
                result.textContent = `It's a Tie!!`;
        }
    });
});