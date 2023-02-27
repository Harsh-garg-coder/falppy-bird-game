
const BIRD_FALLING_SPEED = 5;
const BIRD_FLYING_SPEED = 30;

const bird = document.getElementById("bird");
const gameWindow = document.getElementById("game-window");

function moveBird(velocity) {
    const currentBirdTop = window.getComputedStyle(bird).top;
    const newBirdTop = Number.parseInt(currentBirdTop.split("px")[0]) + velocity + "px";

    bird.style.top = newBirdTop;
}

function addFallingMovementToBird() {
    setInterval(() => {
        moveBird(BIRD_FALLING_SPEED);
    }, 50);
}

function makeBirdLookLikeFlying() {
    setTimeout(() => {
        bird.style.transform = "rotate(-20deg)"
    }, 100)

    setTimeout(() => {
        bird.style.transform = "rotate(0deg)";
    }, 200);
}

function moveBirdUp() {
    moveBird(-BIRD_FLYING_SPEED);
    makeBirdLookLikeFlying();
}

function addEventListenersForMovingBirdUp() {
    window.addEventListener("keydown", (e) => {
        if(e.key === " ") {
            moveBirdUp();
        }
    })

    gameWindow.addEventListener("click", () => {
        moveBirdUp();
    })    
    
}

function addMovementAndControlsToBird() {
    addFallingMovementToBird();

    addEventListenersForMovingBirdUp()
}

addMovementAndControlsToBird();