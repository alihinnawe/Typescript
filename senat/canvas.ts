export function drawSector(
  canvas: HTMLCanvasElement,
  startAngle: number,
  sectorAngle: number,
  color: string
) {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
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
