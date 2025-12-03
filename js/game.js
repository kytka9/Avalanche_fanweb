let puck = document.getElementById("puck");
let rink = document.getElementById("rink");
let goal = document.getElementById("goal");
let message = document.getElementById("message");
let players = document.querySelectorAll(".player");

let x = 20;
let y = 160;
let gameOver = false;

document.body.addEventListener("keydown", function (event) {
    if (gameOver) return;

    const step = 10;

    if (event.key === "ArrowLeft") x -= step;
    if (event.key === "ArrowRight") x += step;
    if (event.key === "ArrowUp") y -= step;
    if (event.key === "ArrowDown") y += step;

    // hranice ľadovej plochy
    x = Math.max(0, Math.min(x, rink.clientWidth - 26));
    y = Math.max(0, Math.min(y, rink.clientHeight - 26));

    puck.style.left = x + "px";
    puck.style.top = y + "px";

    checkGoal();
    checkCollision();
});

function checkGoal() {
    let puckRect = puck.getBoundingClientRect();
    let goalRect = goal.getBoundingClientRect();

    if (
        puckRect.right > goalRect.left &&
        puckRect.left < goalRect.right &&
        puckRect.bottom > goalRect.top &&
        puckRect.top < goalRect.bottom
    ) {
        message.innerText = "GÓÓÓL! 🏒🥳";
        gameOver = true;
    }
}

function checkCollision() {
    let puckRect = puck.getBoundingClientRect();

    for (let player of players) {
        let playerRect = player.getBoundingClientRect();

        if (
            puckRect.right > playerRect.left &&
            puckRect.left < playerRect.right &&
            puckRect.bottom > playerRect.top &&
            puckRect.top < playerRect.bottom
        ) {
            message.innerText = "Hra skončila! Dotkol si sa hráča ❌";
            gameOver = true;
            return;
        }
    }
}