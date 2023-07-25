import { Point } from "./util.js";

export class Board {
	constructor(width, height, squareSideLength = 100) {
		this.width = width;
		this.height = height;
		this.squareSideLength = squareSideLength;
		this.tiles = [];
		this.goals = [];
		populateTiles(this);
	}

	getTilePosition(row, col) {
		return this.getTile(row, col).position;
	}

	getTile(row, col) {
		try {
			return this.tiles[row][col];
		} catch (err) {
			return null;
		}
	}

	activateTile(row, col) {
		let tile = this.tiles[row][col];
		tile.active = true;
	}

	deactiveTile(row, col) {
		let tile = this.tiles[row][col];
		tile.active = false;
	}

	isTileValid(tile) {
		//Tile is not out of bounds
		console.log(tile);
		if (
			tile != null &&
			tile.row > -1 &&
			tile.col > -1 &&
			tile.row < this.tiles.length &&
			tile.col < this.tiles[tile.row].length
		) {
			return true;
		}
		return false;
	}
}

export class Tile {
	constructor(row, col, position, sideLength, active = false) {
		this.row = row;
		this.col = col;
		this.position = position;
		this.sideLength = sideLength;
		this.active = active;
	}

	get centerPoint() {
		let centerX = this.position.X + this.sideLength / 2;
		let centerY = this.position.Y + this.sideLength / 2;
		return new Point(centerX, centerY);
	}
}

export class Goal {
	constructor(row, col, position) {
		this.row = row;
		this.col = col;
		this.position = position;
	}
}

function populateTiles(board) {
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
