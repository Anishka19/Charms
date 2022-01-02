var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("charms.jpg");
  bg2 = loadImage("flitwick.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("#FF7AA0");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("red")
    textSize(30);
    text("YOU SCORED OUTSTANDING IN CHARMS!!",190, 250);
  }

  drawSprites();
}