import { gameConfig } from "../../game.js";
import {
	isValidCommand,
	parseCommand,
	resetPendingCommands,
} from "./commandparser.js";
import {
	getPlayButtonHTMLElement,
	togglePlayButton,
} from "../gui/command/command.js";

const commandBox = document.getElementById("command");

export function startCommandInputListener() {
	setupPlayButton();

	command.addEventListener("input", function handleChange(event) {
		gameConfig.command.currentCommand = commandBox.value;
	});
}
export function clickedPlay() {
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

function toggle() {
	togglePlayingCommand();
	let elem = getPlayButtonHTMLElement();
	togglePlayButton(elem);
	toggleTextBox();
}

function togglePlayingCommand() {
	if (gameConfig.command.playingCommand) {
		gameConfig.command.playingCommand = false;
	} else {
		gameConfig.command.playingCommand = true;
	}
}

function toggleTextBox() {
	if (gameConfig.command.playingCommand) {
		commandBox.disabled = true;
	} else {
		commandBox.disabled = false;
	}
}

function setupPlayButton() {
	const player = document.querySelector(".fake-player");
	player.addEventListener("click", clickedPlay);
}
