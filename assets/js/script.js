function event() {
    let rockButton = document.getElementById("rock");
    rockButton.addEventListener("click", function () {
        runGame("rock")
    });
    let paperButton = document.getElementById("paper");
    paperButton.addEventListener("click", function () {
        runGame("paper")
    });
    let scissorButton = document.getElementById("scissor");
    scissorButton.addEventListener("click", function () {
        runGame("scissor")
    })

}