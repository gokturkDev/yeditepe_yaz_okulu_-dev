import { drawTiles, drawGoals, drawArrow } from "./modules/gui/gui.js";
import { Arrow } from "./modules/arrow/arrow.js";
import { Board } from "./modules/board/board.js";
import { startKeyListener } from "./modules/controller/controller.js";

//Initialize the canvas
var canvasWidth = 600;
var canvasHeight = 400;

export var gameConfig = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;
		this.context = this.canvas.getContext("2d");
		this.ctx = this.context;
		document.getElementById("gamecanvas").appendChild(this.canvas);


		this.board = new Board(canvasWidth, canvasHeight, 100);
		this.board.activateTile(0, 0);
		this.board.activateTile(0, 1);
		this.board.activateTile(1, 1);
		this.board.activateTile(2, 1);
		this.board.activateTile(2, 2);
		this.board.activateTile(2, 3);
		this.arrow = new Arrow(this.board.getTile(0, 0), "W");



		startKeyListener()
	},
	arrow: null,
	board: null,
	ctx: null,
};

function gameLoop() {
	gameConfig.ctx.clearRect(
		0,
		0,
		gameConfig.canvas.width,
		gameConfig.canvas.height
	);
	drawLevel();
	drawArrow(gameConfig.ctx, gameConfig.arrow);
	requestAnimationFrame(gameLoop);
}

function drawLevel() {
	let board = gameConfig.board;
	drawTiles(gameConfig.ctx, board);
	drawGoals(gameConfig.ctx, board);
}

function startGame() {
	gameConfig.start();
	gameLoop();
}
//Start the game when the document is loaded
$(document).ready(function () {
	startGame();
});
