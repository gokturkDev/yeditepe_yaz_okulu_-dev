function parseCommand() {
	
}

export function isValidCommand(command) {
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