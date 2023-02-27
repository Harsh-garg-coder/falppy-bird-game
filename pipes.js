const WIDTH_OF_PIPE = 100; // px
const DISTANCE_BETWEEN_PIPES = 150; // px
const ANIMATION_DURATION_FOR_ONE_PIPE = 1; // second

//  functions for creating pipes and adding animations to those pipes
function findNoOfPipesAccordingToGameWindow() {
    // finding the width of the game window
    const gameWindow = document.getElementById("game-window");

    const gameWindowWidth = gameWindow.clientWidth;

    // calculating no of pipes to create according to the width of the game window
    const noOfPipes = Math.ceil(gameWindowWidth / (WIDTH_OF_PIPE + DISTANCE_BETWEEN_PIPES));

    return noOfPipes;
}

function createSinglePipe() {
    const pipeContainer = document.createElement("div");
    pipeContainer.setAttribute("class", "pipe-container");

    const pipeUp = document.createElement("div");
    pipeUp.setAttribute("class", "pipe-up");

    const pipeDown = document.createElement("div");
    pipeDown.setAttribute("class", "pipe-down");
    
    pipeContainer.append(pipeUp);
    pipeContainer.append(pipeDown);

    return pipeContainer;
}

function createPipes(noOfPipes) {
    const gameWindow = document.getElementById("game-window");

    for(let i = 0; i < noOfPipes; i++) {
        gameWindow.appendChild(createSinglePipe());
    }
}

function addAnimationToPipes(noOfPipes) {
    const currentAnimationDuration = ANIMATION_DURATION_FOR_ONE_PIPE * noOfPipes;

    const pipeContainers = document.querySelectorAll(".pipe-container");

    console.log(pipeContainers);
    for(let i = 0; i < pipeContainers.length; i++) {
        const currentAnimationDelay = i;

        pipeContainers[i].style.animationDuration = currentAnimationDuration + "s";
        pipeContainers[i].style.animationDelay = currentAnimationDelay + "s";
    }
}

function createPipesAndAddAnimationsToThem() {
    const noOfPipes = findNoOfPipesAccordingToGameWindow();

    createPipes(noOfPipes);

    addAnimationToPipes(noOfPipes);
}

createPipesAndAddAnimationsToThem();