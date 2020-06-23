var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dustbin1,dustbin2,dustbin3,paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//paper = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, paper);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	ground = new Ground(600,height,1200,80)
	dustbin1=new Dustbin(900,600,20,120);
	dustbin2=new Dustbin(1100,600,20,120);
	dustbin3=new Dustbin(1000,650,180,20);
	paper1=new Paper(70,200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  keyPressed();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:18,y:-8}) 
	 }
   }

