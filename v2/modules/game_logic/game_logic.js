import { gameConfig } from "../../game.js";
import { makeConfettiEffect } from "../gui/confetti/confetti.js";
import { popupLevelFinished } from "../gui/gui2d/levelFinishedModal.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function arrowArrivedAtGoalTile(tile) {
    
	gameConfig.board.collectGoal(tile.row, tile.col);
	playCollectSound();
    if (areAllGoalsEaten()){
        makeConfettiEffect(3000)
        popupLevelFinished()
    }   

}

export function arrowMovedToInvalidTile() {
	playBlockedSound();
}


function areAllGoalsEaten(){
    return !(gameConfig.board.getGoalsRemaining() > 0)
}