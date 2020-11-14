
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	ground = createSprite(400,650,800,10);

	ball = new paper (200,630,10,10);
	dustbin = new dustbin (600,610,50,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



