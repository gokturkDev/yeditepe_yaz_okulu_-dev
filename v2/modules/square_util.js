export class Square {
    constructor(x, y, sideLength) {
        this.X = x;
        this.Y = y;
        this.sideLength = sideLength
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.sideLength * 2
    }
  }




export function drawSquare(ctx, square){
    ctx.strokeStyle = "rgba(0, 0, 0,.8)";
    ctx.strokeRect(square.X,square.Y,square.sideLength,square.sideLength);
}

export function getAdjacentSquare(square) {
  let offSetX = square.X + square.sideLength
  let adjacentSquare = new Square(offSetX, square.Y, square.sideLength)
  return adjacentSquare
}

export function getBeneathSquare(square) {
  let offSetY = square.Y + square.sideLength
  let beneathSquare = new Square(square.X, offSetY, square.sideLength)
  return beneathSquare
}

export function drawAdjacentSquare(ctx, square, margin=20) {
    
    let adjSquare = getAdjacentSquare(square)
    adjSquare.X += margin
    drawSquare(ctx, adjSquare)
    return adjSquare
}

export function drawBeneathSquare(ctx, square, margin=20) {
  let beneathSquare = getBeneathSquare(square)
  beneathSquare.Y += margin
  drawSquare(ctx, beneathSquare)
  return beneathSquare

}


