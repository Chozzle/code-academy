/* eslint-disable no-undef */

import "p5";
var xPixels = 0;
var yPixels = 0;
var noemiNils;
window.preload = function preload() {
  noemiNils = loadImage("src/noemi_nils.jpg");
};

window.setup = function setup() {
  pixelDensity(1);
  createCanvas(640, 480);
  background(200);

  image(noemiNils, 0, 0, 640, 480);
  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = x;
      //pixels[index + 1] = random(255);
      //pixels[index + 2] = y;
      var alpha = pixels[index + 3];
      alpha = alpha + 50;
      //pixels[index + 3] = 255;
    }
  }

  updatePixels();

  ellipse(45, 23, 8);

  while (xPixels < 640) {
    text(xPixels, xPixels, 10);
    xPixels = xPixels + 50;
  }

  while (yPixels < 480) {
    text(yPixels, 10, yPixels);
    yPixels = yPixels + 50;
  }
};

window.draw = function draw() {
  fill(358, 25, 190);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100);
  }
};
