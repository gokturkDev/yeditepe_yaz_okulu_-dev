import { Point } from "./util.js"

export class Arrow{

    constructor(centerPoint, direction,  length=20) {
        this.centerPoint = centerPoint
        this.length = length
        this.direction = direction
    }

}

var arrow = new Arrow(new Point(125, 85), "W")
document.addEventListener('keydown', logKey);

function logKey(e) {
    switch(e.code) {
        case "ArrowUp":
            arrow.direction = "N"
        break
        case "ArrowDown":
            arrow.direction = "S"
        break
        case "ArrowLeft":
            arrow.direction = "W"
        break
        case "ArrowRight":
            arrow.direction = "E"
        break

    }
    console.log(e.code)
}


export function drawArrow(ctx){
    
    switch (arrow.direction) {    
        case "N":
            drawArrowNorth(ctx, arrow)
        break;
        case "S":
            drawArrowSouth(ctx, arrow)
        break;
        case "E":
            drawArrowEast(ctx, arrow)
        break;
        case "W":
            drawArrowWest(ctx, arrow)
        break;
    }

}



function drawArrowNorth(ctx, arrow){
    let centerX = arrow.centerPoint.X
    let centerY = arrow.centerPoint.Y
    drawArrowBodyVertical(ctx, centerX, centerY, arrow.length)
    drawArrowHeadNorth(ctx, centerX, centerY, arrow.length)
}


function drawArrowSouth(ctx, arrow){
    let centerX = arrow.centerPoint.X
    let centerY = arrow.centerPoint.Y
    drawArrowBodyVertical(ctx, centerX, centerY, arrow.length)
    drawArrowHeadSouth(ctx, centerX, centerY, arrow.length)
}


function drawArrowEast(ctx, arrow){
    let centerX = arrow.centerPoint.X
    let centerY = arrow.centerPoint.Y
    drawArrowBodyHorizontal(ctx, centerX, centerY, arrow.length)
    drawArrowHeadEast(ctx, centerX, centerY, arrow.length)
}


function drawArrowWest(ctx, arrow){
    let centerX = arrow.centerPoint.X
    let centerY = arrow.centerPoint.Y
    drawArrowBodyHorizontal(ctx, centerX, centerY, arrow.length)
    drawArrowHeadWest(ctx, centerX, centerY, arrow.length)
}


function drawArrowBodyVertical(ctx, arrowCenterX, arrowCenterY, arrowLength) {
    
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(arrowCenterX, arrowCenterY);
    ctx.lineTo(arrowCenterX, arrowCenterY + arrowLength / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(arrowCenterX, arrowCenterY);
    ctx.lineTo(arrowCenterX, arrowCenterY - arrowLength / 2);
    ctx.stroke();

}

function drawArrowBodyHorizontal(ctx, arrowCenterX, arrowCenterY, arrowLength) {

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(arrowCenterX, arrowCenterY);
    ctx.lineTo(arrowCenterX + arrowLength / 2, arrowCenterY );
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(arrowCenterX, arrowCenterY);
    ctx.lineTo(arrowCenterX - arrowLength / 2, arrowCenterY);
    ctx.stroke();

}


function drawArrowHeadNorth(ctx, centerX, centerY, arrowLength) {
    //Head of arrow
    let tipY = centerY - arrowLength / 2
    //Left 
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(centerX, tipY);
    ctx.lineTo(centerX - 5, tipY + 5);
    ctx.stroke();
    //Right
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(centerX, tipY);
    ctx.lineTo(centerX + 5, tipY + 5);
    ctx.stroke();

}





function drawArrowHeadSouth(ctx, centerX, centerY, arrowLength) {
    //Head of arrow
    let tipY = centerY + arrowLength / 2
    //Left 
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(centerX, tipY);
    ctx.lineTo(centerX - 5, tipY - 5);
    ctx.stroke();
    //Right
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(centerX, tipY);
    ctx.lineTo(centerX + 5, tipY - 5);
    ctx.stroke();

}

function drawArrowHeadEast(ctx, centerX, centerY, arrowLength) {
    //Head of arrow
    let tipX = centerX + arrowLength / 2
    //Left 
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(tipX, centerY);
    ctx.lineTo(tipX - 5, centerY - 5);
    ctx.stroke();
    //Right
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(tipX, centerY);
    ctx.lineTo(tipX - 5, centerY + 5);
    ctx.stroke();

}
function drawArrowHeadWest(ctx, centerX, centerY, arrowLength) {
    //Head of arrow
    let tipX = centerX - arrowLength / 2
    //Left 
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(tipX, centerY);
    ctx.lineTo(tipX + 5, centerY - 5);
    ctx.stroke();
    //Right
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(tipX, centerY);
    ctx.lineTo(tipX + 5, centerY + 5);
    ctx.stroke();

}