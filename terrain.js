var cols, rows;
var scl = 20;
var w = window.screen.availWidth*1.25;
var h = window.screen.availHeight;

var flying = 0;
var pi = 3.14159265;
var angleX = pi/3;
var angleY = 0;
var terrain = [];

function setup() {
  createCanvas(windowWidth/2, windowHeight/2, WEBGL);
  cols = w / scl;
  rows = h / scl;
  frameRate(30);
  for (var x = 0; x < cols; x++) {
    terrain[x] = [rows];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  if (keyIsPressed && keyCode === LEFT_ARROW && angleY > -pi/6) {
    angleY -= pi/144;
  }
  if (keyIsPressed && keyCode === RIGHT_ARROW && angleY < pi/6) {
    angleY += pi/144;
  }
  
  //print(angleX);
  if (keyIsPressed && keyCode === UP_ARROW && angleX > pi/6) {
    angleX -= pi/144;
  }
  if (keyIsPressed && keyCode === DOWN_ARROW && angleX < 7*pi/18) {
    angleX += pi/144;
  }

  background(168, 220, 255);
  translate(0, 50);
  rotateX(angleX);
  rotateY(angleY);
  //fill(200,200,200, 50);
  translate(-w/2, -h/2);
  noStroke();
  //stroke(0);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      fill (map(terrain[x][y], -100, 100, 0, 255, true), map(terrain[x][y], -100, 100, 0, 140, true),map(terrain[x][y], -100, 100, 255, 0, true), 230);
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}

function windowResized(){
  resizeCanvas(windowWidth/2, windowHeight/2);
}
