import { gameConfig } from "../../game.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function startKeyListener() {
	document.addEventListener("keydown", rotateArrow);
}

function rotateArrow(e) {
	let arrow = gameConfig.arrow;
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
			//moveArrow(arrow);
			break;
	}
}
export function moveArrow(arrow) {
	let currentTile = arrow.currentTile;
	let board = gameConfig.board;
	let nextTile;
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
		if (nextTile.isGoalTile) {
			arrow.eat(nextTile);
			playCollectSound();
		}
	} else {
		playBlockedSound();
	}
}
