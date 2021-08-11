const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow1 = [];
var snow2 = [];
var ground;
var groundHeight=160;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50); 
    
  //snow = new Snow(400,200,50,50);
  for (var k = 0; k <=800; k = k + 80) {
    ground = new Ground(width/2,height,width,20);
  }


}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  for (var k = 0; k < ground.length; k++) {
    ground[k].display();
  }

  //snow.display();
  if(frameCount%60===0){
    snow.push(new Snow1(random(width/2-10, width/2+10), 10, 10))
  }

  for(var h = 0; k < ground.length; h++) {
    snow[h].display();
  }
  
  drawSprites();
}
