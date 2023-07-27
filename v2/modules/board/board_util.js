import { Point } from "../util.js";
import { Tile } from "../tile/tile.js";
import { Goal } from "../goal/goal.js";
import { Arrow } from "../arrow/arrow.js";

export function populateTiles(board) {
	let row = (board.width /= board.squareSideLength);
	let col = (board.height /= board.squareSideLength);
	for (let i = 0; i < row; i++) {
		board.tiles[i] = [];
		for (let j = 0; j < col; j++) {
			let position = new Point(
				j * board.squareSideLength,
				i * board.squareSideLength
			);
			board.tiles[i][j] = new Tile(
				i,
				j,
				position,
				board.squareSideLength,
				false
			);
		}
	}
}


export function _createArrow(board, defaultArrowDirection, defaultArrowTilePosition){

	let tileX = defaultArrowTilePosition.X
	let tileY = defaultArrowTilePosition.Y

	let arrow = new Arrow(board.getTile(tileX, tileY), defaultArrowDirection);
	return arrow
}

function populateGoals(board) {
	let row = (board.width /= board.squareSideLength);
	let col = (board.height /= board.squareSideLength);
	for (let i = 0; i < row; i++) {
		board.tiles[i] = [];
		for (let j = 0; j < col; j++) {
			let position = new Point(
				j * board.squareSideLength,
				i * board.squareSideLength
			);
			board.tiles[i][j] = new Goal(i, j, position);
		}
	}
}
