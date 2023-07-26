import { gameConfig } from "../../game.js";
import { isValidCommand } from "./commandparser.js";
import { togglePlayButton } from "../gui/command/command.js";

const commandBox = document.getElementById("command");

export function startCommandInputListener() {
	setupPlayButton();

	command.addEventListener("input", function handleChange(event) {
		gameConfig.command.currentCommand = commandBox.value;
	});
}
export function clickedPlay() {
	if (gameConfig.command.playingCommand == false) {
		startPlay(this);
	} else {
		stopPlay(this);
	}
}
function startPlay(doc) {
	if (!isValidCommand(gameConfig.command.currentCommand)) {
		promptInvalidCommand();
		return false;
	}
	toggle(doc);
}
function stopPlay(doc) {
	toggle(doc);
}

function promptInvalidCommand() {
	alert("Invalid Command");
}

function toggle(doc) {
	togglePlayingCommand();
	togglePlayButton(doc);
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
