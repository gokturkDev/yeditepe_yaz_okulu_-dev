class Circle {
	constructor(centerX, centerY, radius) {
		(this.centerX = centerX), (this.centerY = centerY), (this.radius = radius);
	}
}
function drawCircle(ctx, circle) {
	ctx.beginPath();
	ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#003300";
	ctx.stroke();
}
