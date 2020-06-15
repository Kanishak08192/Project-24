var paperBall,ground,chain,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	paperBall = new PaperBall(100,420,50,50);

	chain = new Chain(paperBall.body,{x:200, y:50});

	dustbin1 = new Dustbin1(730,410,20,160);
	dustbin2 = new Dustbin2(1080,410,20,160);
	dustbin3 = new Dustbin3(900,480,360,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  paperBall.display();
  ground.display();

 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 
}

function keyPressed(){
if(keyCode === 38 ){
	Matter.Body.setStatic(paperBall.body,false);
	Matter.Body.setAngularVelocity(paperBall.body,2);
	
	chain.fly();
}

}
