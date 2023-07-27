import { gameConfig } from "../../game.js";
import { makeConfettiEffect } from "../gui/confetti/confetti.js";
import { createPopup } from "../gui/gui2d/levelFinishedModal.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function arrowArrivedAtGoalTile(tile) {
    
	gameConfig.board.collectGoal(tile.row, tile.col);
	playCollectSound();
    if (areAllGoalsEaten()){
        makeConfettiEffect(3000)
        createPopup("Congratulations, you passed the level!", "Continue to the next level", continueToNextLevel)
    }   

}

export function arrowMovedToInvalidTile() {
	playBlockedSound();
}


function continueToNextLevel(){
    console.log("hello")
}


function areAllGoalsEaten(){
    return !(gameConfig.board.getGoalsRemaining() > 0)
}