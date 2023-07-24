


// Will be square
export class Rectangle {
    constructor(x, y, h, w) {
        this.X = x;
        this.Y = y;
        this.H = h;
        this.W = w;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }




export function drawRectangle(ctx, rect){
    ctx.strokeStyle = "rgba(0, 0, 0,.8)";
    ctx.strokeRect(rect.X,rect.Y,rect.W,rect.H);
}

export function getAdjacentRectangle(rect) {
  let offSetX = rect.X + rect.W
  let adjacentRect = new Rectangle(offSetX, rect.Y, rect.W, rect.H)
  return adjacentRect
}

export function getBeneathRectangle(rect) {
  let offSetY = rect.Y + rect.H
  let beneathRectangle = new Rectangle(rect.X, offSetY, rect.W, rect.H)
  return beneathRectangle
}

export function drawAdjacentRectangle(ctx, rect, margin=20) {
    
    let adjRect = getAdjacentRectangle(rect)
    adjRect.X += margin
    drawRectangle(ctx, adjRect)
    return adjRect
}

export function drawBeneathRectangle(ctx, rect, margin=20) {
  let benethRect = getBeneathRectangle(rect)
  benethRect.Y += margin
  drawRectangle(ctx, benethRect)
  return benethRect

}


