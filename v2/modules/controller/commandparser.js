import { gameConfig } from "../../game.js";
import { togglePlayButton } from "../gui/command/command.js";
import { moveArrow } from "./controller.js";

const commandBox = document.getElementById("command");

export function startCommandInputListener() {
	setupPlayButton();

	command.addEventListener("input", function handleChange(event) {
		gameConfig.command.currentCommand = commandBox.value;
	});
}

function clickedPlay() {
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

function parseCommand() {
	
}

function isValidCommand(command) {
	let lastChar = "";
	for (let i = 0; i < command.length; i++) {
		let currentChar = command.charAt(i);
		if (lastChar == "" || isNumber(lastChar)) {
			switch (currentChar) {
				case "F":
					break;
				case "R":
					break;
				default:
					return false;
			}

            //If we are at the end and its empty
            let nextChar = command.charAt(i+1);
            if (nextChar == "") {
                return false
            }
		}
        else if (lastChar == "F" || lastChar == "R") {
            if (!isNumber(currentChar)) {
                return false
            }
        } else {
            return false
        }
        lastChar = currentChar
	}
	return true;
}

function isNumber(char) {
	if (typeof char !== "string") {
		return false;
	}

	if (char.trim() === "") {
		return false;
	}

	return !isNaN(char);
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

export function setupPlayButton() {
	const player = document.querySelector(".fake-player");
	player.addEventListener("click", clickedPlay);
}
