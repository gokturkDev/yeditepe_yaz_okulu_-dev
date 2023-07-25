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
        return this.getTile(row,col).position
    }

    getTile(row, col) {
        return this.tiles[row][col]
    }

    activateTile(row, col) {
        let tile = this.tiles[row][col]
        tile.active = true
    }
    
    deactiveTile(row, col){
        let tile = this.tiles[row][col]
        tile.active = false
    }
    
}


export class Tile{

    constructor(row, col, position, sideLength, active=false) {
        this.row = row
        this.col = col
        this.position = position
        this.sideLength = sideLength
        this.active = active
    }

    get centerPosition(){
        let centerX = this.position.X + this.sideLength
        let centerY = this.position.Y + this.sideLength
        return new Point(centerX, centerY)

    }
}



function populateTiles(board){

    let row = board.width /= board.squareSideLength
    let col = board.height /= board.squareSideLength;
    for (let i = 0; i < row; i++) {
        board.tiles[i] = [];
        for (let j = 0; j < col; j++) {
            let position = new Point( i * board.squareSideLength, j * board.squareSideLength)
            board.tiles[i][j] = new Tile(i, j, position, board.squareSideLength, false);
        }
    }

}



