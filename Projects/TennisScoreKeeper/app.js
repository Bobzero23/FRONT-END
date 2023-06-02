const plyrIncr1 = document.querySelector(".plyr1-btn");
const plyrIncr2 = document.querySelector(".plyr2-btn");
const plyr1span = document.querySelector(".plyr1-span");
const plyr2span = document.querySelector(".plyr2-span");
const rstBtn = document.querySelector(".rst-btn");
const plyTo = document.querySelector(".plyTo");

let plyr1Curr = parseInt(plyr1span.innerText);
let plyr2Curr = parseInt(plyr2span.innerText);

const winner = () => {
    plyr1Curr = parseInt(plyr1span.innerText);
    plyr2Curr = parseInt(plyr2span.innerText);

    if (plyr1Curr > plyr2Curr) {
        plyr1span.style.color = "green";
        plyr2span.style.color = "red";
    } else if (plyr1Curr < plyr2Curr) {
        plyr1span.style.color = "red";
        plyr2span.style.color = "green";
    } else {
        plyr1span.style.color = "blue";
        plyr2span.style.color = "blue";
        alert("DRAW!!!");
    }
}

plyrIncr1.addEventListener("click", () => {
    plyr1Curr = parseInt(plyr1span.innerText);

    if (plyr1Curr + plyr2Curr == plyTo.value) {
        winner();
    }

    plyr1span.innerText = `${plyr1Curr + 1}`;
});

plyrIncr2.addEventListener("click", () => {
    plyr2Curr = parseInt(plyr2span.innerText);

    if (plyr1Curr + plyr2Curr == plyTo.value) {
        winner();
    }

    plyr2span.innerText = `${plyr2Curr + 1}`;
});

rstBtn.addEventListener("click", () => {
    plyr1span.innerText = '0';
    plyr2span.innerText = '0';
});
