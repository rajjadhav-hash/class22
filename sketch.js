const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options1 = { isStatic: true, }
ground = Bodies.rectangle(400,380,800,30,options1);
World.add(world, ground);
//console.log(ground)
 var ballOptions = { restitution: 1.3, }
  ball = Bodies.circle(200,200,20,ballOptions);
   World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine); rectMode(CENTER); rect(ground.position.x,ground.position.y,800,30);
 ellipseMode(RADIUS); ellipse(ball.position.x,ball.position.y,20,20);
}