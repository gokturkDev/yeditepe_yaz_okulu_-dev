export class Circle {
	constructor(centerX, centerY, radius) {
		(this.centerX = centerX), (this.centerY = centerY), (this.radius = radius);
	}
}
export function drawCircle(ctx, circle) {
	ctx.beginPath();
	ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#003300";
	ctx.stroke();
}
