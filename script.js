function getComputerSelection() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Paper")||
        (playerSelection === "Paper" && computerSelection === "Scissor")||
        (playerSelection === "Scissor" && computerSelection === "Rock")
    ) {
        result.textContent = `You chose ${playerSelection}.  Computer chose ${computerSelection}. \r\nYou lost!.`;
        return computerScore++;
    }

    else if (playerSelection === computerSelection) {
        result.textContent = `You chose ${playerSelection}.  Computer chose ${computerSelection}. \r\nIt is a tie!`;
        return;
    }

    else if ((computerSelection === "Rock" && playerSelection === "Paper")||
            (computerSelection === "Paper" && playerSelection === "Scissor")||
            (computerSelection === "Scissor" && playerSelection === "Rock")
    ) {
        result.textContent = `You chose ${playerSelection}.  Computer chose ${computerSelection}. \r\nYou win!`;
        return playerScore++;
    }
}


let playerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons');

const resultDiv = document.querySelector('.result');
let result = document.createElement('span');
result.textContent = 'Result will appear here...';
resultDiv.appendChild(result);

const playerScoreDiv = document.querySelector('#playerScore');
let playerScoreText = document.createElement('span');
playerScoreDiv.appendChild(playerScoreText);

const computerScoreDiv = document.querySelector('#computerScore');
let computerScoreText = document.createElement('span');
computerScoreDiv.appendChild(computerScoreText);


buttons.forEach(selection => {
    selection.addEventListener('click', (e) => {
        if ((computerScore === 5) || (playerScore === 5)) {
            if (playerScore > computerScore)
                alert(`You Win!!`);
    
            else if (playerScore < computerScore)
                alert(`You Lose!!`);
    
            else
                alert(`It's a Tie!!`);

            playerScore = playerScoreText.textContent = 0;
            computerScore = computerScoreText.textContent = 0;
            result.textContent = 'Result will appear here...'

            return;
        }
        
        playerSelection = e.target.getAttribute('alt')
        
        playRound(playerSelection, getComputerSelection());
        
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore; 
    });
});