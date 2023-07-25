import {
	Square,
	drawSquare,
	drawAdjacentSquare,
	drawBeneathSquare,
} from "./modules/square_util.js";
import { Arrow, drawArrow } from "./modules/arrow.js";
import { Board } from "./modules/board.js";
import { Point } from "./modules/util.js";

//Initialize the canvas
var canvasWidth = 600;
var canvasHeight = 400;

//Global Variables
var ctx = null;

// TODO Create a board object

var gameConfig = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;
		this.context = this.canvas.getContext("2d");
		ctx = this.context;
		document.getElementById("gamecanvas").appendChild(this.canvas);

		this.board = new Board(canvasWidth, canvasHeight, 100);
		this.arrow = new Arrow(this.board.getTile(0, 0), "W");
	},
	arrow: null,
	board: null,
};

function gameLoop() {
	//drawSvgArrow()
	ctx.clearRect(0, 0, gameConfig.canvas.width, gameConfig.canvas.height);
	drawLevel();
	drawArrow(ctx, gameConfig.arrow);
	requestAnimationFrame(gameLoop);
}

//ARROW MOVEMENTS

document.addEventListener("keydown", rotateArrow);

function rotateArrow(e) {
	let arrow = gameConfig.arrow;
	console.log(e.code);
	switch (e.code) {
		case "ArrowUp":
			arrow.direction = "N";
			break;
		case "ArrowDown":
			arrow.direction = "S";
			break;
		case "ArrowLeft":
			arrow.direction = "W";
			break;
		case "ArrowRight":
			arrow.direction = "E";
			break;
		case "KeyF":
			moveArrow(arrow);
			break;
	}
}

function moveArrow(arrow) {
	let currentTile = arrow.currentTile;
	let board = gameConfig.board;
	let nextTile;
	console.log(currentTile);
	switch (arrow.direction) {
		case "N":
			nextTile = board.getTile(currentTile.row - 1, currentTile.col);
			break;
		case "S":
			nextTile = board.getTile(currentTile.row + 1, currentTile.col);
			break;

		case "W":
			nextTile = board.getTile(currentTile.row, currentTile.col - 1);
			break;

		case "E":
			nextTile = board.getTile(currentTile.row, currentTile.col + 1);
			break;
	}

	if (board.isTileValid(nextTile) && nextTile.active) {
		arrow.moveToTile(nextTile);
	}
}

function drawLevel() {
	let board = gameConfig.board;
	board.activateTile(0, 0);
	board.activateTile(0, 1);
	board.activateTile(1, 1);
	board.activateTile(2, 1);
	board.activateTile(2, 2);
	board.activateTile(2, 3);

	for (let i = 0; i < board.tiles.length; i++) {
		for (let j = 0; j < board.tiles[i].length; j++) {
			if (board.tiles[i][j].active == true) {
				let tilePosition = board.getTilePosition(i, j);
				drawSquare(
					ctx,
					new Square(tilePosition.X, tilePosition.Y, board.squareSideLength)
				);
			}
		}
	}
}

function startGame() {
	gameConfig.start();
	gameLoop();
}
//Start the game when the document is loaded
$(document).ready(function () {
	startGame();
});
