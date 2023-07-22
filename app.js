let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let winnerDisplay = document.querySelector(".winner-text");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.classList.toggle("btnOnClick")
    let ran1 = Math.floor(Math.random() * 6) + 1;
    let ran2 = Math.floor(Math.random() * 6) + 1;
    dice1.setAttribute("src", `./images/${ran1}.png`);
    dice2.setAttribute("src", `./images/${ran2}.png`);
    if (ran1 === ran2) {
        winnerDisplay.innerText = "DRAW!";

    }
    else if (ran1 > ran2) {
        winnerDisplay.innerText = "PLAYER-1 WON!"
    }
    else {
        winnerDisplay.innerText = "PLAYER-2 WON!"

    }


})