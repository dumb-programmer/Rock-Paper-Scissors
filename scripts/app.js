function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock crushes Sissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper covers Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissor cut Paper";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper covers Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissor cuts Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock crushes Scissors";
    }
    else {
        return "It's a tie!";
    }
}

function game() {
    let score = 0;
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Enter a choice: (Rock, Paper, or Scissors : ");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result.substring(0, 7) == "You Win") {
            score++;
        }
        else if (result == "It's a tie!") {
            i--;
        }
        console.log(`Round ${i+1}`);
        console.log(result);
    }
    if (score > 2) {
        return "You Win!";
    }
    else {
        return "You Lose";
    }
}

console.log(game());