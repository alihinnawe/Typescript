export function drawSector(canvas, startAngle, sectorAngle, color) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 100, startAngle, startAngle + sectorAngle, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
