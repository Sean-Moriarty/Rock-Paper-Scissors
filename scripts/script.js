

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
    // randomly generate the NPC's choice using the Math library's random() and floor() methods
    computerChoices = ["rock", "paper", "scissors"];
    choiceIdx = Math.floor(Math.random() * 3);
    return computerChoices[choiceIdx];
}

function playGame(playerHand, computerHand) {
    // display player and computer choices in bootstrap modal
    document.getElementById("outcome-header").innerHTML = "This will change at some point!";
    document.getElementById("outcome-body").innerHTML = "Player: " + playerHand + " <br> Computer: " + computerHand;
}
