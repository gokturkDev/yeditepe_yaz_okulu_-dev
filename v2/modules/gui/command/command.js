import { gameConfig } from "../../../game.js";


const commandBox = document.getElementById("command");
const F_button = document.getElementById("F-button")
const R_button = document.getElementById("R-button")




export function getPlayButtonHTMLElement() {
	return document.getElementById("fake-player");
}

export function startInputListenerForCommandBox(){

	command.addEventListener("input", function handleChange(event) {
		gameConfig.command.currentCommand = commandBox.value;
	});
}


export function addCallbackToPlayButton(callback) {
	const player = document.querySelector(".fake-player");
	player.addEventListener("click", callback);
}


export function toggle() {
	togglePlayingCommand();
	togglePlayButton();
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

function togglePlayButton() {
	let elem = getPlayButtonHTMLElement();
	const buttons = Array.from(elem.children);
	buttons.forEach((button) => button.classList.toggle("hidden"));
}
