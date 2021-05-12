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

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const scoreBoard = document.querySelector(".score-board");

let playerScore = 0;
let compScore = 0;


// buttons.forEach((button) => {
//     button.addEventListener('mousemove', () => {
//         if (playerScore === 5) {
//             result.textContent = "You Win :)";
//             return;
//         }
//         else if (compScore === 5) {
//             result.textContent = "You Loose :(";
//             return;
//         }
//     });
// })

// TODO : Fix the issue of scores not being checked before the button being clicked
// TODO: Disable the buttons and ask the user to refresh once the game has ended

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button);
    });
})


function game(button) {
    result.textContent = playRound(button.textContent, "rock");

    if (playerScore === 5) {
        result.textContent = "You Win :)";
        return;
    }
    else if (compScore === 5) {
        result.textContent = "You Loose :(";
        return;
    }


    if (result.textContent.substring(0, 7) == "You Win") {
        playerScore++;
        if (compScore > 0) compScore--;
    }

    else if (result.textContent.substring(0, 9) == "You Lose!") {
        if (playerScore) playerScore--;
        compScore++;
    }

    scoreBoard.textContent = `Your Score : ${playerScore} \nComputer Score: ${compScore}`;
}
