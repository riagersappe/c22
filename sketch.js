const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;

  var ground_options={
  
    isStatic:true

  }

  var ball_options={

    restitution:1.2

  }

  ground=Bodies.rectangle(400,400,800,50,ground_options);
  World.add(myworld,ground);
  console.log(ground.position.x)

  ball=Bodies.circle(400,200,20,ball_options)
  World.add(myworld,ball);
}

function draw() {
  background(0); 
  Engine.update(myengine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,800,50)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}