import { gameConfig } from "../../game.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function arrowArrivedAtGoalTile(tile) {
    
	gameConfig.board.collectGoal(tile.row, tile.col);
	playCollectSound();

}

export function arrowMovedToInvalidTile() {
	playBlockedSound();
}


function checkIfAllGoalsAreEaten(){
    
}