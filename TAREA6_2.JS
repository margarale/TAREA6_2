function setup() {
  createCanvas(400, 400);
}

function draw() {
  var hilera = 0;
  var x = color(0, 0, 0);
  var y = color(255, 255, 255);
  while (hilera < 8) {
    if (hilera % 2 == 0) {
      x = color(0, 0, 0);
      y = color(255, 255, 255);
    } else {
      x = color(255, 255, 255);
      y = color(0, 0, 0);
    }
