const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

rockBtn.onclick = () => {
    playerChoice(ROCK);
};
paperBtn.onclick = () => {
    playerChoice(PAPER);
};
scissorsBtn.onclick = () => {
    playerChoice(SCISSORS);
};



function playerChoice(choice) {
    playerHand = choice;
    computerHand = computerChoice();
    playGame(playerHand, computerHand);
}

function computerChoice() {
    // randomly generate the NPC's choice using the Math library's random() and floor() methods
    computerChoices = [ROCK, PAPER, SCISSORS];
    choiceIdx = Math.floor(Math.random() * 3);
    return computerChoices[choiceIdx];
}

function playGame(playerHand, computerHand) {
    // display player and computer choices in bootstrap modal
    document.getElementById("outcome-header").innerHTML = "This will show the winner!";
    document.getElementById("outcome-body").innerHTML = "Player: " + playerHand + " <br> Computer: " + computerHand;
}
