//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {

  engine = Engine.create(); //creates a variable universe which we can change/manipulate
  world = engine.world;

  createCanvas(400,400);

  //Passing options to the object
  var ground_options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground); //adding object to our variable world
  
  
  var ball_options = {
    restitution:0.5
  };

  ball= Bodies.circle (200,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);


  rectMode(CENTER); //instructs the computer to take the x & y as the centre of the rectangle
  
  //Rectangle to represent object
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,20,20)

}

/*
ellipse - oval shape
ellipse(x, y, r1, r2);
r1=r2 ==> circle


PHYSICS ENGINE - library which follows the laws of physics
  Matter Library

  1. Universe - Matter.Engine - follows all laws of physics & may contain multiple worlds
  2. World    - Matter.World - Objects are added here
  3. Objects  - Matter.Bodies

  --> NAMESPACING - giving nicknames to bigger functions/variables
*/