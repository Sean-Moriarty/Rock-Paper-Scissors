

rockBtn.onclick = () => {
    playerChoice("rock");
};
paperBtn.onclick = () => {
    playerChoice("paper");
};
scissorsBtn.onclick = () => {
    playerChoice("scissors");
};



function playerChoice(choice) {
    playerHand = choice;
    computerHand = computerChoice();
    playGame(playerHand, computerHand);
}

function computerChoice() {
    computerChoices = ["rock", "paper", "scissors"];
    choiceIdx = Math.floor(Math.random() * 3);
    return computerChoices[choiceIdx];
}

function playGame(playerHand, computerHand) {
    console.log("Player: " + playerHand);
    console.log("Computer: " + computerHand);
}
