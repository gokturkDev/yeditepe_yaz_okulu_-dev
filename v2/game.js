import { Square, drawSquare, drawAdjacentSquare, drawBeneathSquare } from "./modules/square_util.js";
import { drawArrow } from "./modules/arrow.js";

// TODO Create a board object
// TODO  Turtle Object


//Initialize the canvas
var canvasWidth = 600;
var canvasHeight = 400;
var ctx = null

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
    drawSquares()
    drawArrow(ctx)
    requestAnimationFrame(gameLoop)
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