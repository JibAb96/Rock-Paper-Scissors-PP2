let userTally = 0;
let computerTally = 0;
let scoreBoard_div = document.querySelector("score");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let userScoreShown = document.getElementById("user-score");
let computerScoreShown = document.getElementById("comp-score");
let result_p = document.querySelector(".result > p");

function event() {
    rockButton.addEventListener("click", function () {
        runGame("rock")
    });

    paperButton.addEventListener("click", function () {
        runGame("paper")
    });

    scissorButton.addEventListener("click", function () {
        runGame("scissor")
    })

}

function computerPick() {
    picks = ["rock", "paper", "scissors"]
    random = Math.floor(Math.random() * 3);
    return picks[random]
}

function runGame