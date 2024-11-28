let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleIntervalId, plantIntervalId;
const gameOverSound = document.getElementById("gameOverSound");
const scoreIncreaseSound = document.getElementById("scoreIncreaseSound");

window.onload = function () {
    setGame();

    // Reload game on button click
    document.getElementById("reloadButton").addEventListener("click", resetGame);
};

function setGame() {
    // Create 3x3 grid dynamically
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    // Set mole and plant intervals
    moleIntervalId = setInterval(setMole, 1000); // Mole appears every 1 second
    plantIntervalId = setInterval(setPlant, 2000); // Plant appears every 2 seconds
}

function getRandomTile() {
    return Math.floor(Math.random() * 9).toString();
}

function setMole() {
    if (gameOver) return;

    if (currMoleTile) currMoleTile.innerHTML = ""; // Clear previous mole

    const mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    const num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) return;

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) return;

    if (currPlantTile) currPlantTile.innerHTML = ""; // Clear previous plant

    const plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    const num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) return;

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) return;

    // Apply feedback
    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 200); // Remove after 200ms

    if (this === currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        scoreIncreaseSound.play();
    } else if (this === currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        gameOverSound.play();
        clearInterval(moleIntervalId);
        clearInterval(plantIntervalId);
    }
}

function resetGame() {
    // Stop and reset the game-over sound
    gameOverSound.pause();
    gameOverSound.currentTime = 0;

    // Clear any existing intervals
    clearInterval(moleIntervalId);
    clearInterval(plantIntervalId);

    // Reset game variables
    gameOver = false;
    score = 0;
    document.getElementById("score").innerText = score.toString();
    document.getElementById("board").innerHTML = ""; // Clear the game board

    // Restart the game setup
    setGame();
}
