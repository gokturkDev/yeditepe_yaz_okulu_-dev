import { gameConfig } from "../../game.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function arrowArrivedAtGoalTile(tile) {
    
	gameConfig.board.collectGoal(tile.row, tile.col);
	playCollectSound();
    if (areAllGoalsEaten()){
        makeConfettiEffect(1000)
    }

}

export function arrowMovedToInvalidTile() {
	playBlockedSound();
}


function areAllGoalsEaten(){
    return !(gameConfig.board.getGoalsRemaining() > 0)
}