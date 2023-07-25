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

    getCenterOfTile(row, col){
        let tile = this.getTile(row, col)
        let tileStartPos = tile.position
        let centerPos = new Point(tileStartPos.X + this.squareSideLength / 2, tileStartPos.Y + this.squareSideLength / 2)
        return centerPos
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

    constructor(row, col, position, active=false) {
        this.row = row
        this.col = col
        this.position = position
        this.active = active
    }
}



function populateTiles(board){

    let row = board.width /= board.squareSideLength
    let col = board.height /= board.squareSideLength;
    for (let i = 0; i < row; i++) {
        board.tiles[i] = [];
        for (let j = 0; j < col; j++) {
            let position = new Point( i * board.squareSideLength, j * board.squareSideLength)
            board.tiles[i][j] = new Tile(i, j, position, false);
        }
    }

}



