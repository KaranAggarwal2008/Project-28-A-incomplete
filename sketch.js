
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyIMG,boy;
var tRee;
var stoner;
var thrower;
function preload()
{
	boyIMG = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tRee = new Tree;
	stoner = new Stone(200,200);
	boy = Bodies.rectangle(200,600,70,70);
	thrower = new Chain(stoner,{x:200,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  image(boyIMG,200,600,70,70);
  background(255);
  tRee.display();
  stoner.display();
 // boy.display();
  drawSprites();
 
}



