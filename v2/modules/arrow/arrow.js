import { Point } from "../util.js";

export class Arrow {
	constructor(currentTile = null, direction, length = 20) {
		this.currentTile = currentTile;
		this.length = length;
		this.direction = direction;
		this.score = 0
	}

	get centerPoint() {
		if (this.currentTile != null) {
			return this.currentTile.centerPoint;
		}
		return new Point(-1, -1);
	}

	moveToTile(tile) {
		this.currentTile = tile;
	}


	eat(tile){
		if (tile.isGoalTile){
			tile.isGoalTile = false
			this.score += 1
		}
	}
}
