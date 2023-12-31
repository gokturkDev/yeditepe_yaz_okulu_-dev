import { gameConfig } from "../../game.js";
import {
	isValidCommand,
	parseCommand,
	resetPendingCommands,
} from "./commandparser.js";
import {
	addCallbackToPlayButton,
	getCommand,
	startListenerForCommandButtons,
	toggle,
} from "../gui/command/command.js";



export function startCommandInputListener() {
	addCallbackToPlayButton(clickedPlay);
	startListenerForCommandButtons()
}


export function clickedPlay() {
	gameConfig.command.currentCommand = getCommand()

	if (gameConfig.command.playingCommand == false) {
		startPlay();
	} else {
		stopPlay();
	}
}

function startPlay() {
	if (!isValidCommand(gameConfig.command.currentCommand)) {
		promptInvalidCommand();
		return false;
	}
	toggle();
	parseCommand(gameConfig.command.currentCommand, endOfCommand);
}
function stopPlay() {
	toggle();
	resetArrowPosition();
	resetPendingCommands();
}

function endOfCommand() {
	stopPlay();
}

function resetArrowPosition() {
	let board = gameConfig.board;
	board.resetArrowToDefaultPosition();
}

function promptInvalidCommand() {
	alert("Invalid Command");
}