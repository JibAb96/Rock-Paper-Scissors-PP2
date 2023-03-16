let userTally = 0;
let computerTally = 0;
let scoreDiv = document.querySelector("score");
let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let userScoreShown = document.getElementById("user-score");
let computerScoreShown = document.getElementById("comp-score");
let resultScript = document.querySelector(".result > p");
let gameZone = document.querySelector("game")

function click() {
    rockButton.addEventListener("click", function () {
        runGame("Rock")
    });

    paperButton.addEventListener("click", function () {
        runGame("Paper")
    });

    scissorsButton.addEventListener("click", function () {
        runGame("Scissors")
    })

}

function theComputerPick() {
    picks = ["Rock", "Paper", "Scissors"]
    random = Math.floor(Math.random() * 3);
    return picks[random]
}

function runGame(userPick) {
    let computerChoice = theComputerPick();
    switch (userPick + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userPick, computerChoice)
            break
        case "RockPaper":
        case "PaperRock":
        case "ScissorsPaper":
            lose(userPick, computerChoice)
            break
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userPick, computerChoice)
            break
    }
    theWinner();
}

function win(userPick, computerPick) {
    userTally++;
    userScoreShown.innerHTML = " " + userTally;
    computerScoreShown.innerHTML = " " + computerTally;
    resultScript.innerHTML = `${userPick} wins over ${computerPick}. You're the winner! :D`
}

function lose(userPick, computerPick) {
    computerTally++;
    computerScoreShown.innerHTML = " " + computerTally;
    userScoreShown.innerHTML = " " + userTally;
    resultScript.innerHTML = `${userPick} loses to ${computerPick}. You've lost :(`
}

function draw(userPick, computerPick) {
    resultScript.innerHTML = `${userPick} draws against ${computerPick}`
}

function theWinner() {
    if (userTally === 3) {
        return gameZone.innerHTML = `<h1>You're the Winner!</h1>`;
    } else if (computerTally === 3) {
        return gameZone.innerHTML = `<h1>Computer wins!</h1>`;
    } else {
        null
    }
}
click();
theWinner();