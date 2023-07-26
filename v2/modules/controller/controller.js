import { gameConfig } from "../../game.js";


export function startKeyListener() {
	document.addEventListener("keydown", rotateArrow);		
}



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
