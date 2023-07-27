import { gameConfig } from "../../../game.js";
import { isValidCommand } from "../../controller/commandparser.js";

const commandBox = document.getElementById("command");
const F_button = document.getElementById("F-button");
const R_button = document.getElementById("R-button");

export function getPlayButtonHTMLElement() {
	return document.getElementById("fake-player");
}

export function getCommand(){
	return commandBox.value
}

export function startListenerForCommandButtons() {
	F_button.addEventListener("click", function () {
		commandButtonListener("F");
	});
	R_button.addEventListener("click", function () {
		commandButtonListener("R");
	});
}

function commandButtonListener(buttonCommandType) {
	let fullCommand = commandBox.value;

	let fullCommandValid = isValidCommand(fullCommand)
	if (!fullCommandValid){
		alert("Fix the current command first!")
		return
	}

	let lastCommandCouple = [
		fullCommand.charAt(fullCommand.length - 2),
		fullCommand.charAt(fullCommand.length - 1),
	];


	let lastCommandType = lastCommandCouple[0]
	let lastCommandRep = parseInt(lastCommandCouple[1])

	if (lastCommandType == "F" || lastCommandType == "R" || lastCommandType == ""){
		fullCommand = doButtonCommand(fullCommand, buttonCommandType, lastCommandType, lastCommandRep )
	}
	commandBox.value = fullCommand;
}

function doButtonCommand(fullCommand, buttonCommandType, lastCommandType, lastCommandRep){
	if (buttonCommandType == lastCommandType){
		fullCommand = addNewButtonCommand(lastCommandRep, fullCommand);
	} else {
		fullCommand = incrementCurrentCommand(fullCommand, buttonCommandType);
	}

	return fullCommand
}

function addNewButtonCommand(lastCommandRep, fullCommand) {
	let newRep = lastCommandRep + 1;
	if (newRep < 10) {
		fullCommand = setCharAt(fullCommand, fullCommand.length - 1, newRep.toString());
	}
	return fullCommand;
}

function incrementCurrentCommand(fullCommand, buttonCommandType) {
	fullCommand += buttonCommandType;
	fullCommand += "1";
	return fullCommand;
}

function setCharAt(str, index, chr) {
	if (index > str.length - 1) return str;
	return str.substring(0, index) + chr + str.substring(index + 1);
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
