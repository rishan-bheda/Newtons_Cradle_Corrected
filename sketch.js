
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var bobDiameter = 50;
	var bobStartXPosition = width/2;
	var bobStartYPosition = 500;


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(width/2,50,800,50);

	bobObject1 = new Bob(bobStartXPosition-bobDiameter*2,bobStartYPosition,bobDiameter); 
	bobObject2 = new Bob(bobStartXPosition-bobDiameter,bobStartYPosition,bobDiameter); 
	bobObject3 = new Bob(bobStartXPosition,bobStartYPosition,bobDiameter); 
	bobObject4 = new Bob(bobStartXPosition+bobDiameter,bobStartYPosition,bobDiameter); 
	bobObject5 = new Bob(bobStartXPosition+bobDiameter*2,bobStartYPosition,bobDiameter); 

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*4,0); 
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0); 
	rope3 = new Rope(bobObject3.body,roof.body,0,0); 
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*2,0); 
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*4,0);


	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background(200);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	drawSprites();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -100, y: -200});
	}
}

