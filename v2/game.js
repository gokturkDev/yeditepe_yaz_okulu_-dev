import { Arrow } from "./modules/arrow/arrow.js";
import { Board } from "./modules/board/board.js";
import { startCommandInputListener } from "./modules/controller/commandInputs.js";
import { startKeyListener } from "./modules/controller/controller.js";
import { arrowArrivedAtGoalTile } from "./modules/game_logic/game_logic.js";
import { drawGame } from "./modules/gui/gui.js";
import { getLevel1Board } from "./modules/levels/levels.js";

//Initialize the canvas
let canvasWidth = 600;
let canvasHeight = 400;


// # TODO
// - make border red when hit
// - change reset button icon 



export let gameConfig = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;
		this.context = this.canvas.getContext("2d");
		this.ctx = this.context;
		document.getElementById("gamecanvas").appendChild(this.canvas);
		this.board = getLevel1Board()
		
		startKeyListener();
		startCommandInputListener()
		
	},
	board: null,
	ctx: null,
	command: {
		playingCommand: false,
		currentCommand: ""
	}
};

function gameLoop() {
	drawGame()
	requestAnimationFrame(gameLoop);
}


function startGame() {
	gameConfig.start();
	gameLoop();
}
//Start the game when the document is loaded
$(document).ready(function () {
	startGame();
});
