import { Square, drawSquare, drawAdjacentSquare, drawBeneathSquare } from "./modules/square_util.js";
import { drawArrow } from "./modules/arrow.js";
import { Board } from "./modules/board.js";


//Initialize the canvas
var canvasWidth = 600;
var canvasHeight = 400;
var ctx = null

var board = new Board(canvasWidth, canvasHeight, 100)


// TODO Create a board object
// TODO  Turtle Object




var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        ctx = this.context
        document.getElementById('gamecanvas').appendChild(this.canvas);  
    }
}

function gameLoop() {
    //drawSvgArrow()
    ctx.clearRect(0, 0, gameCanvas.canvas.width, gameCanvas.canvas.height);
    //drawSquares()
    drawLevel()
    drawArrow(ctx)
    requestAnimationFrame(gameLoop)
}

function drawLevel(){
    board.tiles[0][0] = 1
    board.tiles[0][1] = 1
    board.tiles[1][1] = 1
    board.tiles[1][2] = 1
    board.tiles[2][1] = 1
    board.tiles[2][2] = 1

    for (let i = 0; i < board.tiles.length; i++) {
        for(let j=0; j < board.tiles[i].length; j++){
            if (board.tiles[i][j] == 1) {
                let tilePosition = board.getTilePosition(i, j)
                drawSquare(ctx, new Square(tilePosition.X, tilePosition.Y, board.squareSideLength))
            } 
        }
    }

}
function drawSquares(){
    var square = new Square(75, 35, 100)
    drawSquare(ctx, square)
    let square2 = drawAdjacentSquare(ctx, square)
    let square3 = drawAdjacentSquare(ctx, square2)
    let square4 = drawBeneathSquare(ctx, square3)
    let square5 = drawBeneathSquare(ctx, square4)
}




function startGame() {
    gameCanvas.start()
    gameLoop()
}
//Start the game when the document is loaded
$( document ).ready(function() {
    startGame()
});