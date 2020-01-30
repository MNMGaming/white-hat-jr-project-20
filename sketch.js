let bgColor;

//change colors on mouse click!
function setup() {
  createCanvas(400, 400);
  bgColor = random(255); 
}

function draw() {
background(bgColor); 
}

function mousePressed() {
  bgColor = random (255); 
}