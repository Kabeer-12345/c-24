
// MAtter.Engine, MAtter.World, MAtter.Bodies

// Namespacing  - nickname

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground,box,box1;

function setup() {
  createCanvas(800,400);
 
  // Create an engine
  engine = Engine.create(); // Matter.Engine.create();
  world = engine.world;

  // JSON format  - Javascript Object Notation.

  var ground_options = {
    isStatic : true
  };

  ground = Bodies.rectangle(400,390,800,10,ground_options);
  World.add(world,ground);  

  // box object

  box = new Box(250,200,50,70);
  box1= new Box(200,100,100,100);
  
  console.log(box);

}

function draw() {
  background(0);  
  Engine.update(engine);
  box.display();
  box1.display();
  rectMode(CENTER) ;
  rect(ground.position.x,ground.position.y,800,10);
 
}