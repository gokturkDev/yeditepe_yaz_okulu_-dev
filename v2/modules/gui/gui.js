import {
	drawArrowNorth,
	drawArrowSouth,
	drawArrowEast,
	drawArrowWest,
} from "./arrow/arrow_utils.js";
import { drawSquare, Square } from "./shapes/square.js";

export function drawArrow(ctx, arrow) {
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
export function drawTiles(ctx, board) {
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

export function drawGoals(ctx, board) {
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
