




export function drawTiles(ctx, board){
	for (let i = 0; i < board.tiles.length; i++) {
		  for (let j = 0; j < board.tiles[i].length; j++) {
			  if (board.tiles[i][j].active == true) {
				  let tilePosition = board.getTilePosition(i, j);
				  drawSquare(
					  ctx,
					  new Square(tilePosition.X, tilePosition.Y, board.squareSideLength)
				  );
			  }
		  }
	  }
  }
  
  
export function drawGoals(ctx, board){
	for (let i = 0; i < board.tiles.length; i++) {
		  for (let j = 0; j < board.tiles[i].length; j++) {
			  if (board.tiles[i][j].active == true) {
				  let tilePosition = board.getTilePosition(i, j);
				  /*drawCircle(
					  ctx,
					  new Circle(tilePosition.X, tilePosition.Y, board.squareSideLength)
				  ); */
			  }
		  }
	  }
  }



class Circle {
	constructor(centerX, centerY, radius){
		this.centerX = centerX,
		this.centerY = centerY,
		this.radius = radius
	}
}


function drawCircle(ctx, circle) {
	
	ctx.beginPath();
	ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'blue';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}








class Square {
	constructor(x, y, sideLength) {
		this.X = x;
		this.Y = y;
		this.sideLength = sideLength;
	}
	// Getter
	get area() {
		return this.calcArea();
	}
	// Method
	calcArea() {
		return this.sideLength * 2;
	}
}





function drawSquare(ctx, square) {
	ctx.strokeStyle = "rgba(0, 0, 0,.8)";
	ctx.strokeRect(square.X, square.Y, square.sideLength, square.sideLength);
}

function getAdjacentSquare(square) {
	let offSetX = square.X + square.sideLength;
	let adjacentSquare = new Square(offSetX, square.Y, square.sideLength);
	return adjacentSquare;
}

function getBeneathSquare(square) {
	let offSetY = square.Y + square.sideLength;
	let beneathSquare = new Square(square.X, offSetY, square.sideLength);
	return beneathSquare;
}

function drawAdjacentSquare(ctx, square, margin = 20) {
	let adjSquare = getAdjacentSquare(square);
	adjSquare.X += margin;
	drawSquare(ctx, adjSquare);
	return adjSquare;
}

function drawBeneathSquare(ctx, square, margin = 20) {
	let beneathSquare = getBeneathSquare(square);
	beneathSquare.Y += margin;
	drawSquare(ctx, beneathSquare);
	return beneathSquare;
}
