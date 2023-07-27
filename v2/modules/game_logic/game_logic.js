import { gameConfig } from "../../game.js";
import { makeConfettiEffect } from "../gui/confetti/confetti.js";
import { createPopup } from "../gui/gui2d/levelFinishedModal.js";
import { getNextLevelBoard } from "../levels/levels.js";
import { playBlockedSound, playCollectSound } from "../sound/player.js";


export function arrowArrivedAtGoalTile(tile) {
    
	gameConfig.board.collectGoal(tile.row, tile.col);
	playCollectSound();
    if (areAllGoalsEaten()){
        continueToNextLevel()
    }   

}

export function arrowMovedToInvalidTile() {
	playBlockedSound();
}

function continueToNextLevel(){
    makeConfettiEffect(3000)
    let nextLevelBoard = getNextLevelBoard(gameConfig.board)
    if (nextLevelBoard != null){
        createPopup("Congratulations, you passed the level!", "Continue to the next level", startNextLevel)
    } else {
        createPopup("Congratulations, you conquered the game!")        
    }
    
}

function startNextLevel(){
    gameConfig.board = getNextLevelBoard(gameConfig.board)
}

function areAllGoalsEaten(){
    return !(gameConfig.board.getGoalsRemaining() > 0)
}