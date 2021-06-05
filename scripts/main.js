const ROCK = '<i class="fas fa-hand-rock"></i>';
const PAPER = '<i class="fas fa-hand-paper"></i>';
const SCISSORS = '<i class="fas fa-hand-scissors"></i>';


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
    var outcome = getWinner(playerHand, computerHand);
    var display = "";

    if (outcome === null) {
        display = "It was a draw...";
    } else if (outcome === true) {
        display = "You win!!!";
    } else if (outcome === false) {
        display = "You lose.";
    }
    document.getElementById("outcome-header").innerHTML = display;
    document.getElementById("outcome-body").innerHTML = "You: " + playerHand + " <br> Computer: " + computerHand;
}

function getWinner(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return null;
    } else if (playerHand === ROCK) {
        if (computerHand === SCISSORS) {
            return true;
        }
    } else if (playerHand === PAPER) {
        if (computerHand === ROCK) {
            return true;
        }
    } else if (playerHand === SCISSORS) {
        if (computerHand === PAPER) {
            return true;
        }
    }
    return false;
}