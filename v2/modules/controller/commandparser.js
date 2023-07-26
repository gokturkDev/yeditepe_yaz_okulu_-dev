import { gameConfig } from "../../game.js";
import { togglePlayButton } from "../gui/command/command.js";
import { moveArrow } from "./controller.js";

const commandBox = document.getElementById("command");

export function startCommandInputListener() {
	setupPlayButton();
}

function togglePlayCommand() {
    if (gameConfig.playingCommand) {
		gameConfig.playingCommand = false;
	} else {
		gameConfig.playingCommand = true;
	}
}

function toggleTextBox() {
    if (gameConfig.playingCommand){
        commandBox.disabled = true
    } else {
        commandBox.disabled = false 
    }

}

function clickedPlay() {
	togglePlayButton(this);
    togglePlayCommand()
    toggleTextBox()

}

export function setupPlayButton() {
	const player = document.querySelector(".fake-player");
	player.addEventListener("click", clickedPlay);
}
