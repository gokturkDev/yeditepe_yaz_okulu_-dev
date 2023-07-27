import { Point } from "../util.js";

export class Tile {
	constructor(row, col, position, sideLength, active = false, isGoalTile = false) {
		this.row = row;
		this.col = col;
		this.position = position;
		this.sideLength = sideLength;
		this.active = active;
		this.isGoalTile = isGoalTile
		this.isGoalTileActive = isGoalTile
	}


	get centerPoint() {
		let centerX = this.position.X + this.sideLength / 2;
		let centerY = this.position.Y + this.sideLength / 2;
		return new Point(centerX, centerY);
	}
}
