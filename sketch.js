var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,log1,log2,log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	log1=createSprite(240,600,30,110)
	log1.shapeColor="red"
	log2=createSprite(480,600,30,110)
	log2.shapeColor="red"
	log3=createSprite(360,640,220,30,PI,)
	log3.shapeColor="red"

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 log1=Bodies.rectangle(200,500,30,100,{isStatic:true});
	 World.add(world,log1);
	 log2=Bodies.rectangle(480,600,30,100,{isStatic:true})
World.add(world,log2);
log3=Bodies.rectangle(360,640,190,30,PI,{isStatic:true})
World.add(world,log3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



