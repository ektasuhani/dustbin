
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create ground here.
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
	
	Engine.run(engine);

  paperobject=new Paper();
  dustbinobject=new Dustbin();
}
  



function draw() {
  rectMode(CENTER);
  background("red");
 rect(ground.position.x,ground.position.y,800,20)

 
  paperobject.display();
dustbinobject.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW);
Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
}



