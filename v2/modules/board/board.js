import { populateTiles } from "./board_util.js";

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
