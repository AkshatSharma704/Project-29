const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(800,400);
  
  ground = new Ground(0, 400, 400, 10);
}

function draw() {
  background(255,255,255);
  
  ground.display();
  drawSprites();
}