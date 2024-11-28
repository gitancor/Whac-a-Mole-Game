Whac-a-Mole Game
A fun, interactive Whac-a-Mole game built with HTML, CSS, and JavaScript. The goal of the game is to click on the moles as they appear on the grid and avoid clicking on the plants. Every time a mole is clicked, your score increases. If you click on a plant, the game ends.

Features
Responsive Design: The game board adjusts based on screen size to ensure an optimal experience on mobile devices, tablets, and desktops.
Interactive Game Board: A 3x3 grid where moles and plants randomly appear. The user clicks on tiles to hit the mole or avoid the plant.
Score Tracking: The score increases every time a mole is clicked. The current score is displayed on the screen.
Game Over Sound & Reset: A game-over sound plays when you click on a plant. The game can be reset using the "Reload Game" button.
Mole and Plant Appearances: Moles appear every 1 second and plants every 2 seconds.
How to Play
Click on the mole as it randomly appears in the grid to increase your score.
Avoid clicking on the plants, as clicking them will end the game.
The current score is displayed at the top of the page.
When the game ends, a "GAME OVER" message is shown along with your final score.
Press the "Reload Game" button to restart the game.
Installation Instructions
Download the repository or clone it using Git:

bash
Copy code
git clone https://github.com/yourusername/whac-a-mole.git
Open the index.html file in any modern web browser to play the game.

Files Structure
index.html: The main HTML file containing the structure of the game.
mole.css: The CSS file responsible for styling the game, including the layout and responsiveness.
mole.js: The JavaScript file that handles the game logic, such as mole and plant placement, score tracking, and game-over conditions.
Assets:
monty-mole.png: Image of the mole.
piranha-plant.png: Image of the plant.
soil.png: Background texture for the game board.
pipe.png: Background texture for the individual tiles.
game-over.mpeg.wav: Sound played when the game ends.
score-increase.mp3: Sound played when a mole is hit.
Technology Used
HTML: For structuring the web page.
CSS: For styling the game and ensuring it's responsive.
JavaScript: For handling game logic, score updates, and interactions.
How It Works
JavaScript Logic
The game board consists of a 3x3 grid where tiles are clickable.
Moles are placed randomly on one of the tiles every second, and plants are placed every two seconds.
When a player clicks on a tile containing a mole, the score increases, and a sound is played.
If a player clicks on a plant, the game ends, a game-over message is shown, and a sound is played.
The "Reload Game" button resets the game, clearing the board and restarting the timer for moles and plants.
CSS Styling
The game board is centered on the screen and is responsive, adjusting to fit various screen sizes.
The individual tiles have no borders between them but are highlighted when clicked.
Transitions and hover effects improve interactivity.