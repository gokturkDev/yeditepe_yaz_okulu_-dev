import { Rectangle, drawRectangle, drawAdjacentRectangle, drawBeneathRectangle } from "./modules/rect_util.js";


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
    drawRectangles()
    drawArrow()
    requestAnimationFrame(gameLoop)
}

function drawRectangles(){
    var rect = new Rectangle(75, 35, 100, 100)
    drawRectangle(ctx, rect)
    let rect2 = drawAdjacentRectangle(ctx, rect)
    let rect3 = drawAdjacentRectangle(ctx, rect2)
    let rect4 = drawBeneathRectangle(ctx, rect3)
    let rect5 = drawBeneathRectangle(ctx, rect4)
}


function drawArrow(){

    /*
    
    */

    
    var startX = 125
    var startY = 85

    //Tail of arrow
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY + 15);
    ctx.stroke();
    //Head of arrow

    //Left 
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX - 5, startY + 5);
    ctx.stroke();
    //Right
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 5, startY + 5);
    ctx.stroke();

}


function startGame() {
    gameCanvas.start()
    gameLoop()
}
//Start the game when the document is loaded
$( document ).ready(function() {
    startGame()
});