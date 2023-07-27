import { _createArrow, populateTiles } from "./board_util.js";

export class Board {
	constructor(
		width,
		height,
		arrowDefaultTilePosition,
		arrowDefaultDirection,
		levelNo,
		squareSideLength = 100
	) {
		this.width = width;
		this.height = height;
		this.squareSideLength = squareSideLength;
		this.tiles = [];
		this.arrowDefaultTilePosition = arrowDefaultTilePosition;
		this.arrowDefaultDirection = arrowDefaultDirection;
		this.levelNo = levelNo;
		populateTiles(this);
		this.arrow = _createArrow(
			this,
			arrowDefaultDirection,
			arrowDefaultTilePosition
		);
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
		let tile = this.getTile(row, col);
		tile.active = true;
	}

	deactiveTile(row, col) {
		let tile = this.getTile(row, col);
		tile.active = false;
	}

	isTileValid(tile) {
		//Tile is not out of bounds
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

	setGoalTile(row, col) {
		let tile = this.getTile(row, col);
		tile.isGoalTile = true;
		tile.isGoalTileActive = true;
	}

	unsetGoalTile(row, col) {
		let tile = this.getTile(row, col);
		tile.isGoalTile = false;
	}

	collectGoal(row, col){
		let tile = this.getTile(row, col);
		if (tile.isGoalTile){
			tile.isGoalTileActive = false;
			this.arrow.eat()
		}

	}

	getGoalsRemaining(){
		let goalCount = 0;
		for (let i = 0; i < this.tiles.length; i++){
			for(let j=0; j < this.tiles[i].length; j++){
				let tile = this.getTile(i, j);
				if (tile.isGoalTileActive){
					goalCount++;
				}
			}
		}
		return goalCount
	}



	resetArrowToDefaultPosition() {
		let tile = this.getTile(
			this.arrowDefaultTilePosition.X,
			this.arrowDefaultTilePosition.Y
		);
		this.arrow.direction = this.arrowDefaultDirection;
		this.arrow.moveToTile(tile);
	}
}
