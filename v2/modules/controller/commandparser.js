import { moveArrow, rotateArrowRight } from "./controller.js";

export function parseCommand(command) {
	for (let i = 0; i < command.length; i += 2) {
		let commandCouple = command.charAt(i) + command.charAt(i + 1);
		parseCommandCouple(commandCouple);
	}
}

function parseCommandCouple(commandCouple) {
	let commandType = commandCouple.charAt(0);
	let commandRepetition = parseInt(commandCouple.charAt(1));
	let commandCallBack;

	switch (commandType) {
		case "F":
			commandCallBack = moveArrow;
			break;
		case "R":
			commandCallBack = rotateArrowRight;
			break;
	}

	for (let i = 0; i < commandRepetition; i++) {
		commandCallBack();
	}
}

export function isValidCommand(command) {
	let lastChar = "";
	for (let i = 0; i < command.length; i++) {
		let currentChar = command.charAt(i);

		//Beginning or start of command
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
			let nextChar = command.charAt(i + 1);
			if (nextChar == "") {
				return false;
			}
		}
		//End of command
		else if (lastChar == "F" || lastChar == "R") {
			if (!isNumber(currentChar)) {
				return false;
			}
		} else {
			return false;
		}
		lastChar = currentChar;
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
