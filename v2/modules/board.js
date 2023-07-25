import { Point } from "./util.js"

export class Board {

    constructor(width, height, squareSideLength=100){
        this.width = width
        this.height = height
        this.squareSideLength = squareSideLength
        this.tiles = []
        populateTiles(this)
        console.log(this.tiles)
    }

    getTilePosition(row, col){
        let xPos = col * this.squareSideLength
        let yPos = row * this.squareSideLength
        return new Point(xPos, yPos)
    }
    
}


function populateTiles(board){

    let row = board.width /= board.squareSideLength
    let col = board.height /= board.squareSideLength;
    for (let i = 0; i < row; i++) {
        board.tiles[i] = [];
        for (let j = 0; j < col; j++) {
            board.tiles[i][j] = 0;
        }
    }

}



