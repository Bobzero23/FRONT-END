const plyrIncr1 = document.querySelector(".plyr1-btn");
const plyrIncr2 = document.querySelector(".plyr2-btn");
const plyr1span = document.querySelector(".plyr1-span");
const plyr2span = document.querySelector(".plyr2-span");
const rstBtn = document.querySelector(".rst-btn");
const plyTo = document.querySelector(".plyTo");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 3;

plyrIncr1.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            plyr1span.classList.add("winner");
            plyr2span.classList.add("loser");
            isGameOver = true;
        }
        plyr1span.textContent = p1Score;
    }
});

plyrIncr2.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            plyr1span.classList.add("loser");
            plyr2span.classList.add("winner");
            isGameOver = true;
        }
        plyr2span.textContent = p2Score;
    }
});

plyTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

rstBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    plyr1span.textContent = 0;
    plyr2span.textContent = 0;
    plyr1span.classList.remove("loser", "winner");
    plyr2span.classList.remove("winner", "loser");
}