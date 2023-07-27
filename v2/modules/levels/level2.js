import { gameConfig } from "../../game.js";
import { Board } from "../board/board.js";
import { Point } from "../util.js";

export function getLevel2Board(){

    let arrowDefaultTilePosition = new Point(0,0)
    let arrowDefaultDirection = "E"
    let board = new Board(gameConfig.canvas.width, gameConfig.canvas.height, arrowDefaultTilePosition, arrowDefaultDirection, 100);
    board.activateTile(0, 0);
    board.activateTile(0, 1);
    board.activateTile(0, 2);
    board.activateTile(1, 2);
    board.activateTile(1, 3);
    board.activateTile(2, 3);

    board.setGoalTile(2, 3);
    return board
}