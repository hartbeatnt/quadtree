import Point from './point';

const container = document.getElementById('container');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
container.appendChild(canvas);
ctx.rect(0, 0, 400, 400);
ctx.fillStyle = "blue";
ctx.fill();

ctx.fillStyle = "red";

for (let i = 0; i < 50; i++) {
  let pt = new Point(Math.random() * 400, Math.random() * 400);
}