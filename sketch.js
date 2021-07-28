var ship,ship1;
var  sea,sea1;

function preload(){
  ship1 = loadImage("ship-1.png","ship-2.png");

  sea1 = loadImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(320,285,10,10);
  sea.addImage(sea1);
  sea.scale = 0.5
  sea.x = sea.width /8
  
  sea.velocityX = -4


  ship = createSprite(300,300,20,50);
  ship.addImage(ship1)
  ship.scale = 0.2
  
}



function draw() {
  background("blue");

  if (keyDown("RIGHT_ARROW")){
    ship.velocityX=2
  }

  if (keyDown("LEFT_ARROW")){
    ship.velocityX=-2
  }
  if (keyDown("space")){
    ship.velocityX=0
  }

  if (sea.x < 0){
    sea.x = sea.width/8
  }
  
 drawSprites()
}