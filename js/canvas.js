const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

handleResizing();
const gui = new dat.Gui();

function handleResizing() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

function drawPictureFrame(ctx) {
  ctx.fillRect(100, 100, 300, 400);
  ctx.clearRect(120, 120, 260, 360);
  ctx.strokeRect(130, 130, 240, 340);
}

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(450, 100);
  ctx.lineTo(550, 200);
  ctx.lineTo(450, 400);
  ctx.closePath();
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function drawArc() {
  ctx.beginPath();
  ctx.arc(600, 400, 80, 0, Math.PI + Math.PI * (7 / 8), false);
  ctx.lineWidth = 4;
  ctx.fill();
}

function drawSmilyEmoji() {
  ctx.beginPath();
  ctx.arc(400, 400, 100, 0, 2 * Math.PI);

  ctx.moveTo(350, 350);
  ctx.arc(350, 350, 20, 0, Math.PI);
  ctx.stroke();
}

function drawTrianglesToAPoint(x, y) {
  if (x < 200) {
    x = 200;
  }

  for (let i = x - 200; i <= x + 70; i += 50) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(i, 300);
    ctx.lineTo(i + 35, 300);
    ctx.closePath();
    ctx.fill();
  }
}

function drawQuadraticCurve() {
  const points = {
    p1: 25,
    p2: 25,
    p3: 25,
    p4: 62.5,
  };

  gui.add(points.p1, "p1", 0, 100);
  gui.add(points.p2, "p2", 0, 100);
  gui.add(points.p3, "p3", 0, 100);
  gui.add(points.p4, "p4", 0, 100);

  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(points.p1, points.p2, points.p3, points.p4);
  ctx.stroke();
}

function draw() {
  // drawPictureFrame(ctx);
  // drawTriangle();
  // drawArc();
  // drawSmilyEmoji();
  // drawTrianglesToAPoint(400, 200);
  drawQuadraticCurve();
}

window.addEventListener("resize", handleResizing);
window.addEventListener("DOMContentLoaded", draw);
