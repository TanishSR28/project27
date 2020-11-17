
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground((width/2),(height/2)-400,500,30);
	bob1 = new Bob((width/2)-200,(height/2)+200);
	bob2 = new Bob((width/2)-120,(height/2)+200);
	bob3 = new Bob((width/2)-40,(height/2)+200);
	bob4 = new Bob((width/2)+40,(height/2)+200);
	bob5 = new Bob((width/2)+120,(height/2)+200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  strokeWeight(5)
  line(bob1.body.position.x,bob1.body.position.y-40,ground.body.position.x-200,ground.body.position.y);
  line(bob2.body.position.x,bob2.body.position.y-40,ground.body.position.x-120,ground.body.position.y);
  line(bob3.body.position.x,bob3.body.position.y-40,ground.body.position.x-40,ground.body.position.y);
  line(bob4.body.position.x,bob4.body.position.y-40,ground.body.position.x+40,ground.body.position.y);
  line(bob5.body.position.x,bob5.body.position.y-40,ground.body.position.x+120,ground.body.position.y);
  drawSprites();
 
}



