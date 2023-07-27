import { gameConfig } from "../../game.js";
import {
	arrowArrivedAtGoalTile,
	arrowMovedToInvalidTile,
} from "../game_logic/game_logic.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";

export function startKeyListener() {
	//document.addEventListener("keydown", rotateArrow);
}

export function rotateArrowRight() {
	let arrow = gameConfig.board.arrow;
	switch (arrow.direction) {
		case "N":
			arrow.direction = "E";
			break;
		case "E":
			arrow.direction = "S";
			break;
		case "S":
			arrow.direction = "W";
			break;
		case "W":
			arrow.direction = "N";
			break;
	}
}
export function moveArrow() {
	let arrow = gameConfig.board.arrow;
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
			arrowArrivedAtGoalTile(nextTile);
		}
	} else {
		arrowMovedToInvalidTile();
	}
}
