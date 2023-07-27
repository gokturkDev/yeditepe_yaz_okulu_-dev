import { moveArrow, rotateArrowRight } from "./controller.js";



let pendingCommands = []

export function parseCommand(commands, endOfCommandCallback=null) {

	let unpackedCommand = unpackCommand(commands)
	executeCommands(unpackedCommand, endOfCommandCallback)
}

export function resetPendingCommands(){
	for (let i = 0; i < pendingCommands.length; i++ ){
		let timeout = pendingCommands[i];
		clearTimeout(timeout)
	}
	pendingCommands = []
}

function unpackCommand(command){
	let unpackedCommand = ""
	for(let i = 0; i < command.length; i+=2){
		let commandType = command.charAt(i);
		let commandRepetition = parseInt(command.charAt(i+1));
		for (let j = 0; j < commandRepetition; j++){
			unpackedCommand += commandType
		}
	}

	return unpackedCommand

}

function executeCommands(unpackedCommand, endOfCommandCallback=null){
	if (unpackedCommand.length > 0){
		let currCommand = unpackedCommand.charAt(0)
		executeCommand(currCommand)
		unpackedCommand = unpackedCommand.substring(1, unpackedCommand.length)
		let timeout = setTimeout(executeCommands.bind(null, unpackedCommand, endOfCommandCallback), 1000);
		pendingCommands.push(timeout)
	} else {
		if (typeof endOfCommandCallback == "function"){
			let timeout = setTimeout(endOfCommandCallback.bind(null), 1000);
			pendingCommands.push(timeout)
		}
	}

}

function executeCommand(command) {
	let commandCallBack;
	switch (command) {
		case "F":
			commandCallBack = moveArrow;
			break;
		case "R":
			commandCallBack = rotateArrowRight;
			break;
	}
	commandCallBack();
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
