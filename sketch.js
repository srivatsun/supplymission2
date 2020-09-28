var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redzone,redzonesprite,redzonesprite2,redzonesprite3,redzone2,redzone3;
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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redzonesprite=createSprite(width/2,655,200,20);
	redzonesprite.shapeColor=color("red")

	redzonesprite2=createSprite(490,595,20,100);
	redzonesprite2.shapeColor=color("red")

	redzonesprite2=createSprite(310,595,20,100);
	redzonesprite2.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
		
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 redzone= Bodies.rectangle(350, 630 ,50, 10 , {isStatic:true} );
 	World.add(world, redzone);

	 redzone2= Bodies.rectangle(450, 630 ,100, 10 , {isStatic:true} );
 	World.add(world, redzone2);

	 redzone3= Bodies.rectangle(450, 630 ,100, 10 , {isStatic:true} );
 	World.add(world, redzone3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(keyDown("down")){
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:false}); 
	World.add(world, packageBody);
 
}
  
	 drawSprites();
	}


