import {
	drawArrowNorth,
	drawArrowSouth,
	drawArrowEast,
	drawArrowWest,
} from "./arrow/arrow_utils.js";
import { drawSquare, Square } from "./shapes/square.js";
import { gameConfig } from "../../game.js";

export function drawGame() {
	gameConfig.ctx.clearRect(
		0,
		0,
		gameConfig.canvas.width,
		gameConfig.canvas.height
	);
	drawLevel();
	drawArrow(gameConfig.ctx, gameConfig.arrow);
}
function drawLevel() {
	let board = gameConfig.board;
	drawTiles(gameConfig.ctx, board);
	drawGoals(gameConfig.ctx, board);
}

function drawArrow(ctx, arrow) {
	switch (arrow.direction) {
		case "N":
			drawArrowNorth(ctx, arrow);
			break;
		case "S":
			drawArrowSouth(ctx, arrow);
			break;
		case "E":
			drawArrowEast(ctx, arrow);
			break;
		case "W":
			drawArrowWest(ctx, arrow);
			break;
	}
}
function drawTiles(ctx, board) {
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

function drawGoals(ctx, board) {
	for (let i = 0; i < board.tiles.length; i++) {
		for (let j = 0; j < board.tiles[i].length; j++) {
			if (board.tiles[i][j].active == true) {
				let tilePosition = board.getTilePosition(i, j);
				/*drawCircle(
					ctx,
					new Circle(tilePosition.X, tilePosition.Y, board.squareSideLength)
				); */
			}
		}
	}
}
